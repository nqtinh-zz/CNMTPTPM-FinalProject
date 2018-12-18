var express = require('express');
var router = express.Router();
var users = require('../models/users');
const axios = require('axios');
var { decode } = require('../lib/transaction/index');

const getData = async (keyy) => {
    try {
        return await axios.get('https://komodo.forest.network/tx_search?query=%22account=%27' + keyy + '%27%22')
    } catch (error) {
        console.error(error)
    }
}

router.get("/account", function (req, res) {
    var key = [];

    console.log("data");
    users.find({}).then((data) => {
        for (let i = 0; i < data.length; i++) {
            let tmp = data[i]["publicKey"];
            key.push(tmp);

            //   if (operation == 'create_account') {
            //     const users = new User(
            //       {
            //         publicKey: txs.params.address,
            //         name: null,
            //         avatar: null,
            //         sequence: null,
            //         balance: null,
            //         energy: null,
            //         transactions: null
            //       })
            //     users.save();
            //   }
            //   console.log(txs);
        }
        
            let keyy = key[0];
            const getSequence = async (keyy) => {
                const blocks = await getData(keyy);
                let sequeLast = 0;

                
                    blocks.data.result.txs.map(tx => {
                        const seque = decode(Buffer.from(tx.tx, 'base64'));
                        sequeLast = seque.sequence;
                    })
                    console.log(keyy);
                console.log(sequeLast);
            }
            getSequence(keyy);
            //console.log(keyy);
            //res.send(keyy);
        

        //res.send(txs);
    })

});

module.exports = router;