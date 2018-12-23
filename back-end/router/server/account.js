var users = require('../../models/User');
var alltx = require('../../models/alltx');
var block = require('../../models/blocks');
var axios = require('axios');
var { encode, decode, decodeFollowings } = require('../../lib/transaction/v1');
var base32 = require('base32.js');
var BLOCK = parseFloat(22020096 * 86400 / 9007199254740991);

const getData = async (keyy) => {
    try {
        return await axios.get('https://komodo.forest.network/tx_search?query=%22account=%27' + keyy + '%27%22')
    } catch (error) {
        console.error(error)
    }
}
const getAccount = async (keyy, page) => {
    try {
        return await axios.get('https://komodo.forest.network/tx_search?query=%22account=%27' + keyy + '%27%22&page=' + page)
    } catch (error) {
        console.error(error)
    }
}

//chạy lấy totalcount sau đó chia trang get dữ liệu đúng theo txsearch
exports.getTransactions = async () => {
    var key = [];
    const data = await users.find({});
    for (let i = 0; i < data.length; i++) {
        let tmp = data[i].publicKey;
        key.push(tmp);
    }
    let arr = [];
    for (let i = 0; i < key.length; i++) {
        let keyy = key[i];
        arr.push(new Promise(async (resolve, reject) => {
            const blocks = await getData(keyy);
            let total_count = blocks.data.result.total_count;
            try {
                await users.findOneAndUpdate({ publicKey: keyy }, { $set: { transactions: total_count } });
            } catch (error) {

            }
            resolve("");
        }));
    }
    console.log("Tạo transactions");
    const result = await Promise.all(arr);
    //console.log(result);
    return result;

};
exports.createFullInfo = async () => {
    //alltx.drop();
    const data = await users.find({});
    let arr = [];
    
    for (let i = 0; i < data.length; i++) {
        let posi=0;
        let tmp = data[i].publicKey;
        let count = data[i].transactions;
        let j =data[i].lastpage;
        let k =data[i].lastposition;
        let page = parseInt(count / 30) + 1;
        //console.log(j+'----'+page);
        // if(tmp=='GAO4J5RXQHUVVONBDQZSRTBC42E3EIK66WZA5ZSGKMFCS6UNYMZSIDBI')
        // console.log('page: '+page);
        for (j; j <= page; j++) {
            let blocks = await getAccount(tmp, j);
            let txs = blocks.data.result.txs;
            //console.log('flag1: ');
            
            for (k; k < txs.length; k++) {
                // if(tmp=='GAO4J5RXQHUVVONBDQZSRTBC42E3EIK66WZA5ZSGKMFCS6UNYMZSIDBI')
                 //console.log('transactions: '+j+'--------'+30*(j-1)+k);
                var byte = Buffer.from(txs[k].tx, 'base64').length;
                arr.push(new Promise(async (resolve) => {
                    const alltx = new AllTx(
                        {
                            height: txs[k].height,
                            publicKey: tmp,
                            tx: txs[k].tx,
                            bytetx: byte,
                            time: null,
                            sequence: 0,                       
                            operation: null,
                            address: null,
                            key: null,
                            name: null,
                            post: null,
                            picture: null,
                            following: null,
                            amount: 0,
                        })
                    await alltx.save();
                   
                    resolve("");
                }));
            }
            if(k==txs.length) k=0;
            posi=txs.length;
        }
        await users.findOneAndUpdate({ publicKey: data[i].publicKey },
            { $set: { lastpage: page, lastposition: posi } });


    }
    console.log("Tạo fullinfo");
    const result = await Promise.all(arr);
    //console.log(result);
    return result;
};
exports.getAllInfo = async () => {
    const data = await alltx.find({});
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        let txs = decode(Buffer.from(data[i].tx, 'base64'));
        let tmp, name, post, picture, amount;
        let tmpfollowing = [];
        if (txs.operation == 'post' || txs.operation == 'update_account') {
            if (txs.params.key == 'picture') {
                tmp = txs.params.value;
                picture = tmp.toString('base64')
            }
            if (txs.params.key == 'name') {
                tmp = txs.params.value;
                name = tmp.toString()
            }
            //có vấn để ở hàm này khi mảng following nhiều
            // if (txs.params.key == 'followings') {
            //     tmp = txs.params.value;
            //     try {
            //         let decoded = decodeFollowings(tmp).addresses;

            //         for (let j = 0; j < decoded.length; j++) {
            //             //console.log(base32.encode(decoded[j]));
            //             tmpfollowing.push(base32.encode(decoded[j]));
            //             //console.log(tmpfollowing[j]);
            //         }
            //     } catch (er) {
            //         console.log("lỗi");
            //     }

            // }
            if (txs.params.value == null) {
                tmp = txs.params.content;
                post = tmp.toString();
            }
        }
        if (txs.operation == 'payment') {
            amount = txs.params.amount;
        }
        if (txs.operation != 'payment') {
            amount = 0;
        }

        // for (let j = 0; j < tmpfollowing.length; j++) {
        //     tmpfollowing.push(base32.encode(decoded[j]));
        //     console.log(i+'--'+tmpfollowing[j]);
        // }
        arr.push(new Promise(async (resolve) => {
            await alltx.findOneAndUpdate({ height: data[i].height, publicKey: data[i].publicKey },
                {
                    $set: {
                        sequence: txs.sequence,
                        operation: txs.operation,
                        address: txs.params.address,
                        key: txs.params.key,
                        name: name,
                        picture: picture,
                        post: post,
                        following: tmpfollowing,
                        amount: amount,
                    }
                })
            resolve("");
        }));
    }
    const result = await Promise.all(arr);
    //console.log(result);
    return result;
};
exports.getFollowing = async () => {
    const user = await users.find({});
    let arr = [];
    for (let i = 0; i < user.length; i++) {
        arr.push(new Promise(async (resolve) => {
            await alltx.find({ publicKey: user[i].publicKey }).sort({ sequence: 1 }).then(async (alltx) => {
                let lastsequence = 0, tmp = 0, tp = 0;
                let amount = 0;
                let name, picture;
                let post = [];
                let following = [];
                for (let j = 0; j < alltx.length; j++) {
                    if (alltx[j].publicKey != alltx[j].address && alltx[j].sequence > lastsequence) {
                        lastsequence = alltx[j].sequence;
                    }
                    if (alltx[j].address == null || (alltx[j].publicKey != alltx[j].address)) {
                        amount = amount - alltx[j].amount;
                    }
                    if (alltx[j].publicKey == alltx[j].address) {
                        amount = amount + alltx[j].amount;
                    }
                    if (alltx[j].name != null) {
                        name = alltx[j].name;
                    }
                    if (alltx[j].picture != null) {
                        picture = alltx[j].picture;
                    }
                    if (alltx[j].post != null) {
                        post.push(alltx[j].post);
                    }
                    // if (alltx[j].following.length != 0) {
                    //     following = alltx[j].following;
                    //     //console.log(following[0]);
                    // }
                }
                //let following = tmpfollowing.filter((v, i) => tmpfollowing.indexOf(v) === i)
                // for(let t=0;t<tmpfollowing.length;t++)
                //console.log(i + ' - ' + user[i].publicKey + '---' + following);
                if (alltx[0]) {
                    await users.findOneAndUpdate({ publicKey: alltx[0].publicKey },
                        {
                            $set: {
                                sequence: lastsequence,
                                balance: amount,
                                name: name,
                                avatar: picture,
                                post: post,
                                following: following,
                            }
                        })
                }
            });
            resolve("");
        }));
    }
    const result = await Promise.all(arr);
    //console.log(result);
    return result;
};
exports.getFullTime = async () => {
    const data = await block.find({});
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        //console.log(data[i].time);
        let tmptime = data[i].time;
        //let times = (tmptime.getHours() * 3600 + tmptime.getMinutes() * 60 + tmptime.getSeconds()).toString();
        //bị fail chỗ này sẽ tạo ra height có time mới là null
        arr.push(new Promise(async (resolve) => {
            await alltx.find({ height: data[i].height })
                .then(async (all) => {
                    for (let j = 0; j < all.length; j++) {
                        await alltx.findOneAndUpdate({ publicKey: all[j].publicKey, height: all[j].height },
                            {
                                $set: {
                                    time: tmptime
                                }
                            })
                    }
                })
            resolve("");
        }));
    }

    console.log("copytime");
    const result = await Promise.all(arr);
    //console.log(result);
    return result;
};
exports.getEnergy = async () => {
    const user = await users.find({});
    let arr = [];
    for (let i = 0; i < user.length; i++) {
        arr.push(new Promise(async (resolve) => {
            await alltx.find({ publicKey: user[i].publicKey }).sort({ height: 1 }).then((data) => {
                let balances = user[i].balance;
                let energy;
                let B = 0;
                let currentdate = new Date();
                let time = currentdate.setHours(currentdate.getHours() - 7);
                let day = (new Date(time)).getDate();
                for (let j = 1; j < data.length; j++) {
                    if ( data[j].time && day == data[j].time.getDate() &&  (data[j].address == null || data[j].address != data[j].publicKey)) {
                        //console.log(element.publicKey+' '+element.bytetx + " " + +element.time);
                        //console.log(element.height+'-'+element.time.getDate());
                        let timeafter = (data[j].time.getHours() * 3600 + data[j].time.getMinutes() * 60 + data[j].time.getSeconds());
                        let timebefore;
                        if (B == 0) {
                            timebefore = 0;
                        }
                        B = Math.ceil(Math.max(0, (86400 - parseFloat(timeafter - timebefore)) / 86400) * B + parseFloat(data[j].bytetx));
                        //console.log(B);}
                        timebefore = timeafter;
                    }
                }
                
                if(isNaN(B)) B=0;
                //console.log(balances + "    " + BLOCK +  "  " + B );
                energy = parseInt(balances * BLOCK - B);
                users.findOneAndUpdate({ publicKey: user[i].publicKey }, { $set: { energy: energy } }).then(() => {
                    // console.log("OK");
                })
            });
            resolve("");
        }));
    }

    const result = await Promise.all(arr);
    console.log("DONE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    return result;
};
// // router.get("/test1", function (req, res) {
// //     users.find({}).then((user) => {
// //         for (let i = 0; i < user.length; i++) {
// //             alltx.find({ publicKey: user[i].publicKey }).sort({ height: 1 }).then((alltx) => {
// //                 alltx.forEach(element => {
// //                     console.log(element.height + " " + element.publicKey+' '+element.time);
// //                 });

// //             });
// //         }
// //     });
// // });

// //Test energy của 1 acc bất kì
// router.get("/test2", function (req, res) {
//     users.find({ publicKey: "GDBKL674OZL6KRC7G5L6BOGAPQDKXLOMOF7RUAJM344WQ3AX6S2WSFP7" }).then((user) => {
//         let balances = user[0].balance;
//         //console.log(balances);
//         alltx.find({ publicKey: "GDBKL674OZL6KRC7G5L6BOGAPQDKXLOMOF7RUAJM344WQ3AX6S2WSFP7" }).sort({ height: 1 }).then((alltxx) => {
//             let energy;
//             let B = 0;
//             let currentdate = new Date();
//             currentdate.setHours( currentdate.getHours() + 7 );
//             console.log(currentdate);
//             alltxx.forEach(element => {
//                 //console.log(element.publicKey+' '+element.bytetx + " " + +element.time);
//                 //console.log(element.height+'-'+element.time.getDate());
//                 let tmptime;
//                 let time=element.time.setHours( element.time.getHours() + 7 );
//                 if (time != null) {

//                     tmptime = (time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds());
//                     if (day == time.getDate()) {
//                         B = Math.ceil(Math.max(0, (86400 - parseFloat(tmptime)) / 86400) * B + parseFloat(element.bytetx));
//                     }
//                 }
//                 else { B = 0; }
//                 //console.log(B);
//             });
//             energy = parseInt(balances * BLOCK - B);
//             console.log(energy);
//         });
//     })

// });

//Test mọi acc nhưng phải chạy lại server để lấy time các height mới nhất, tránh time=null



