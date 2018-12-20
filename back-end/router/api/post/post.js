const express = require('express');
const {sign,encode, decode} = require('../../../lib/transaction/index');
const axios = require('axios');
const getSequence = require('../../../lib/getSequence');
const router = express.Router();
const passport = require('passport');
router.post('/', passport.authenticate('jwt',{session:false}),(req,res)=>{
    console.log(req.body.type);
    const {text,type, keys, privatekey} = req.body;
    const content = {text, type}
    console.log(content);
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