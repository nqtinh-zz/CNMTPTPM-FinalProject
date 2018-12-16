const express = require('express');
const {sign,encode, decode} = require('../../../lib/transaction/index');
const axios = require('axios');
const router = express.Router();
router.post('/', (req,res)=>{
    console.log(req.body);
    const {key, value, privatekey} = req.body;

    const tx= {
        version: 1,
        sequence :8,
        memo: Buffer.alloc(0),
        operation:'update_account',
        params:{
          value:Buffer.from(value,'utf-8'),
          key
        }
      }
      sign(tx, privatekey);
      const etx=encode(tx).toString('hex');
      console.log(etx);
      axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x'+etx)
        .then(data=>console.log("good"));
      
})

module.exports = router;