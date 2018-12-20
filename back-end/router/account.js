var express = require('express');
var router = express.Router();
var users = require('../models/users');
var alltx = require('../models/alltx');
const axios = require('axios');
var { decode } = require('../lib/transaction/index');

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
            //console.log(data[i].height + '--' + amount);
            alltx.findOneAndUpdate({ height: data[i].height },
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
                let lastsequence = 0,tmp=0,tp=0;
                let amount = 0;
                let name,picture;
                for (let j = 0; j < alltx.length; j++) {
                    if (user[i].publicKey == alltx[j].publicKey) {
                        if (alltx[j].publicKey != alltx[j].address && alltx[j].sequence > lastsequence) {
                            lastsequence = alltx[j].sequence;
                        }
                        if (alltx[j].operation == 'payment') {
                            if (alltx[j].publicKey != alltx[j].address) {
                                amount = amount - alltx[j].amount;
                            }
                            else {
                                amount = amount + alltx[j].amount;
                            }
                        }
                        if (alltx[j].key=='name' && alltx[j].sequence >= tmp) {
                            tmp = alltx[j].sequence;
                            name=alltx[j].value;
                        }
                        if (alltx[j].key=='picture' && alltx[j].sequence >= tp) {
                            tp = alltx[j].sequence;
                            picture=alltx[j].value;
                        }
                    }
                }
                console.log(i+' - '+user[i].publicKey + '---' + lastsequence);
                
                users.findOneAndUpdate({ publicKey: user[i].publicKey },
                    {
                        $set: {
                            sequence: lastsequence,
                            balance: amount,
                            name:name,
                            avatar:picture,
                        }
                    })
                    .then().catch((error) => {
                        console.log(error);
                    });
            });
        }
    })

});


module.exports = router;