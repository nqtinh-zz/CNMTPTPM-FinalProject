const express = require('express');
const {sign,encode, decode} = require('../../../lib/transaction/index');
const axios = require('axios');
const getSequence = require('../../../lib/getSequence');
const router = express.Router();
router.post('/', (req,res)=>{
    console.log(req.body);
    const {content, keys, privatekey} = req.body;
    getSequence(privatekey)
      .then(sequence=>{
        const tx= {
          version: 1,
          sequence :sequence+1,
          memo: Buffer.alloc(0),
          operation:'post',
          params:{
            content:Buffer.from(JSON.stringify(content)),
            keys: keys
          }
        }
        sign(tx, privatekey);
        const etx=encode(tx).toString('hex');
        console.log(etx);
        axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x'+etx)
          .then(data=>console.log(data.data));
      })
    
      
})

module.exports = router;