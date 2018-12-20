const express = require('express');
const {sign,encode, decode} = require('../../lib/transaction/index');
const getSequence = require('../../lib/getSequence');
const axios = require('axios');
const router = express.Router();
const passport = require('passport');
router.post('/send',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {publickey, amount, privatekey} = req.body;
    getSequence(privatekey)
      .then(sequence=>{
        const tx= {
          version: 1,
          sequence :sequence+1,
          memo: Buffer.alloc(0),
          operation:'payment',
          params:{
            address:publickey,
            amount: parseInt(amount)
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