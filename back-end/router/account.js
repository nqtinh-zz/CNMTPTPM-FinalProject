const express = require('express');
var router = express.Router();
var users = require('../models/User');
var alltx = require('../models/alltx');
var block = require('../models/blocks');
const axios = require('axios');
var { decode } = require('../lib/transaction/index');

const BLOCK = parseFloat(22020096 * 86400 / 9007199254740991);

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


router.get("/gettransactions", function (req, res) {
    var key = [];
    console.log("data");
    users.find({}).then((data) => {
        for (let i = 0; i < data.length; i++) {
            let tmp = data[i].publicKey;
            key.push(tmp);
        }
        for (let i = 0; i < key.length; i++) {
            let keyy = key[i];
            getTcount = async (keyy) => {
                const blocks = await getData(keyy);
                let total_count = blocks.data.result.total_count;
                users.findOneAndUpdate({ publicKey: keyy }, { $set: { transactions: total_count } }).then(() => {
                    // console.log("OK");
                }).catch((error) => {
                    console.log(error);
                });

                //console.log(keyy+'-'+total_count);
            }
            getTcount(keyy);
        }


    })

});

router.get("/alluser", function (req, res) {

    users.find({}).then((data) => {
        for (let i = 0; i < data.length; i++) {
            let tmp = data[i].publicKey;
            let count = data[i].transactions;
            let page = parseInt(count / 30) + 1;
            getTcount = async (tmp, page) => {
                for (let i = 1; i <= page; i++) {
                    let blocks = await getAccount(tmp, i);
                    let arrtmp = [];
                    let txs = blocks.data.result.txs;
                    for (let j = 0; j < txs.length; j++) {
                        var byte = Buffer.from(txs[j].tx, 'base64').length;

                        if (tmp == "GBYL3XK3TE3BP57FA7X7BJJT2ORI2VI7RDJUEJW65TZ5NR5RO3H5IXAW")
                            console.log(j);
                        const alltx = new AllTx(
                            {
                                height: txs[j].height,
                                publicKey: tmp,
                                tx: txs[j].tx,
                                bytetx: byte,
                                time: null,
                                sequence: 0,
                                bandwidth: null,
                                operation: null,
                                address: null,
                                key: null,
                                value: null,
                                amount: 0,
                            })
                        alltx.save()
                            .then()
                            .catch(err => console.log(err));;
                    }
                }
            }
            getTcount(tmp, page);
        }
    })
    console.log("xong");
});

router.get("/allinfo", function (req, res) {
    alltx.find({}).then((data) => {
        for (let i = 0; i < data.length; i++) {
            let txs = decode(Buffer.from(data[i].tx, 'base64'));
            // console.log(data[i].height);
            // console.log(txs);
            let tmp, value, amount;
            if (txs.operation == 'post' || txs.operation == 'update_account') {
                if (txs.params.key == 'picture') {
                    tmp = txs.params.value;
                    value = tmp.toString('base64')
                }
                if (txs.params.key == 'name') {
                    tmp = txs.params.value;
                    value = tmp.toString()
                }

                if (txs.params.value == null) {
                    tmp = txs.params.content;
                    value = tmp.toString();
                }
            }

            if (txs.operation == 'payment') {
                amount = txs.params.amount;
            }
            if (txs.operation != 'payment') {
                amount = 0;
            }
            if (data[i].height == 2358)
                console.log(txs.params);
            alltx.findOneAndUpdate({ height: data[i].height, publicKey: data[i].publicKey },
                {
                    $set: {
                        sequence: txs.sequence,
                        operation: txs.operation,
                        address: txs.params.address,
                        key: txs.params.key,
                        value: value,
                        amount: amount,
                    }
                })
                .then().catch((error) => {
                    console.log(error);
                });
        }


    });
    users.find({}).then((user) => {
        for (let i = 0; i < user.length; i++) {
            alltx.find({}).then((alltx) => {
                let lastsequence = 0, tmp = 0, tp = 0;
                let amount = 0;
                let name, picture;
                for (let j = 0; j < alltx.length; j++) {
                    if (user[i].publicKey == alltx[j].publicKey) {
                        if (alltx[j].publicKey != alltx[j].address && alltx[j].sequence > lastsequence) {
                            lastsequence = alltx[j].sequence;
                        }
                        if (alltx[j].publicKey != alltx[j].address) {
                            amount = amount - alltx[j].amount;
                        }
                        if (alltx[j].publicKey == alltx[j].address) {
                            amount = amount + alltx[j].amount;
                        }
                        if (alltx[j].key == 'name' && alltx[j].sequence >= tmp) {
                            tmp = alltx[j].sequence;
                            name = alltx[j].value;
                        }
                        if (alltx[j].key == 'picture' && alltx[j].sequence >= tp) {
                            tp = alltx[j].sequence;
                            picture = alltx[j].value;
                        }
                    }
                }
                //console.log(i + ' - ' + user[i].publicKey + '---' + lastsequence);

                users.findOneAndUpdate({ publicKey: user[i].publicKey },
                    {
                        $set: {
                            sequence: lastsequence,
                            balance: amount,
                            name: name,
                            avatar: picture,
                        }
                    })
                    .then().catch((error) => {
                        console.log(error);
                    });
            });
        }
    })

});


router.get("/copytime", function (req, res) {
    block.find({}).then((data) => {
        for (let i = 0; i < data.length; i++) {
            //console.log(data[i].time);
            let tmptime = data[i].time;
            //let times = (tmptime.getHours() * 3600 + tmptime.getMinutes() * 60 + tmptime.getSeconds()).toString();
            //bị fail chỗ này sẽ tạo ra height có time mới là null
            alltx.find({ height: data[i].height })
                .then((all) => {
                    for (let j = 0; j < all.length; j++) {
                        alltx.findOneAndUpdate({ publicKey: all[j].publicKey, height: all[j].height },
                            {
                                $set: {
                                    time: tmptime
                                }
                            })
                            .then().catch((error) => {
                                console.log(error);
                            });
                    }
                }).catch((error) => {

                    console.log(error);
                });
        }
    })
    console.log("copytime");

    // users.find({}).then((user) => {
    //     for (let i = 0; i < user.length; i++) {
    //         alltx.find({}).then((data) => {
    //             let arrtxsize = [];
    //             let arrtime = [];
    //             for (let j = 0; j < data.length; j++) {
    //                 if (user[i].publicKey == data[j].publicKey) {
    //                     let time = (new Date(data[j].time));
    //                     arrtime.push(time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds());
    //                     arrtxsize.push(data[j].bytetx)
    //                 }
    //             }
    //             for (let t = 0; t < arrtxsize.length; t++) {
    //                 console.log(user[i].publicKey + '--' + arrtxsize[t] + '--' + arrtime[t]);
    //             }
    //         })
    //     }
    // })

});
// router.get("/test1", function (req, res) {
//     users.find({}).then((user) => {
//         for (let i = 0; i < user.length; i++) {
//             alltx.find({ publicKey: user[i].publicKey }).sort({ height: 1 }).then((alltx) => {
//                 alltx.forEach(element => {
//                     console.log(element.height + " " + element.publicKey+' '+element.time);
//                 });

//             });
//         }
//     });
// });

//Test energy của 1 acc bất kì
router.get("/test2", function (req, res) {
    users.find({ publicKey: "GDBKL674OZL6KRC7G5L6BOGAPQDKXLOMOF7RUAJM344WQ3AX6S2WSFP7" }).then((user) => {
        let balances = user[0].balance;
        console.log(balances);
        alltx.find({ publicKey: "GDBKL674OZL6KRC7G5L6BOGAPQDKXLOMOF7RUAJM344WQ3AX6S2WSFP7" }).sort({ height: 1 }).then((alltxx) => {
            let energy;
            let B = 0;
            let currentdate = new Date();
            let day = currentdate.getDate();
            alltxx.forEach(element => {
                //console.log(element.publicKey+' '+element.bytetx + " " + +element.time);
                //console.log(element.height+'-'+element.time.getDate());
                let times;
                if (element.time != null) {

                    times = (element.time.getHours() * 3600 + element.time.getMinutes() * 60 + element.time.getSeconds());
                    if (day == element.time.getDate()) {
                        B = Math.ceil(Math.max(0, (86400 - parseFloat(times)) / 86400) * B + parseFloat(element.bytetx));
                    }
                }
                else { B = 0; }
                //console.log(B);
            });
            energy = parseInt(balances * BLOCK - B);
            console.log(energy);
        });
    })

});

//Test mọi acc nhưng phải chạy lại server để lấy time các height mới nhất, tránh time=null
router.get("/test3", function (req, res) {
    users.find({}).then((user) => {
        for (let i = 0; i < user.length; i++) {
            let balances = user[0].balance;
            let energy;
            let B = 0;
            let currentdate = new Date();
            let day = currentdate.getDate();
            alltx.find({}).sort({ height: 1 }).then((data) => {
                for (let j = 0; j < data.length; j++) {
                    if (user[i].publicKey == data[j].publicKey) {
                        if (data[j].address == null || data[j].address != data[j].publicKey) {
                            //console.log(element.publicKey+' '+element.bytetx + " " + +element.time);
                            //console.log(element.height+'-'+element.time.getDate());
                            let times = (data[j].time.getHours() * 3600 + data[j].time.getMinutes() * 60 + data[j].time.getSeconds());
                            if (day == data[j].time.getDate()) {
                                B = Math.ceil(Math.max(0, (86400 - parseFloat(times)) / 86400) * B + parseFloat(data[j].bytetx));
                            }
                            //console.log(B);}
                        }
                    }
                }
            });
            energy = parseInt(balances * BLOCK - B);
            console.log(energy);
        }
    })
});
module.exports = router;