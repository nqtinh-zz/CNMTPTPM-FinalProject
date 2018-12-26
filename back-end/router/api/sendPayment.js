const express = require('express');
const {sign,encode, decode} = require('../../lib/transaction/index');
const getSequence = require('../../lib/getSequence');
const axios = require('axios');
const router = express.Router();
const SimpleCrypto = require('simple-crypto-js').default;
const passport = require('passport');
router.post('/send',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {publickey, amount, privatekeyHash,sequence} = req.body;
    console.log(req.body)
    const simpleCrypto = new SimpleCrypto('some-unique-key');
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
        sign(tx, simpleCrypto.decrypt(privatekeyHash));

        const etx=encode(tx).toString('hex');
        console.log(etx);
        axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x'+etx)
          .then(data=>res.status(200).json({msg:"success"}));
      
    
      
})

module.exports = router;