const express = require('express');
const getSequence = require('../../../lib/getSequence');
const {sign,encode, decode} = require('../../../lib/transaction/index');
const passport = require('passport');
const axios = require('axios');
const router = express.Router();
router.post('/', passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {key, value, privatekey} = req.body;
    getSequence(privatekey)
    .then(sequence=>{
      let tx={};
      if(key === 'name')
      {
        tx= {
          version: 1,
          sequence :sequence+1,
          memo: Buffer.alloc(0),
          operation:'update_account',
          params:{
            value:Buffer.from(value,'utf-8'),
            key
          }
        }
      }
      if(key === 'picture')
      {
        tx= {
          version: 1,
          sequence :sequence+1,
          memo: Buffer.alloc(0),
          operation:'update_account',
          params:{
            value:Buffer.from(value,'base64'),
            key
          }
        }
      }
    
      sign(tx, privatekey);
      const etx=encode(tx).toString('hex');
      console.log(etx);
      axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x'+etx)
        .then(data=>console.log("good"));
    })
      
})

module.exports = router;