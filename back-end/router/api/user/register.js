const express = require('express');
const axios = require('axios');
const {sign,encode, decode} = require('../../../lib/transaction/index');
const getSequence = require('../../../lib/getSequence');
const {key} = require('../../../lib/generate-keypair');
const { Keypair } = require('stellar-base')
const router = express.Router();
const privatekey = key.secret();
const publickey = key.publicKey();
router.post('/',(req,res)=>{
    const{priKey} = req.body;
    const publicKey = Keypair.fromSecret(priKey).publicKey();
    const tx= {
        version: 1,
        sequence :Number(sequence)+1,
        memo: Buffer.alloc(0),
        operation:'create_account',
        params:{
          address:publickey,
        }
      }
      sign(tx, priKey);
      const etx=encode(tx).toString('hex');
      console.log(etx);
      axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x'+etx)
        .then(data=>console.log("good"));
    res.send({privatekey,publickey});
    })

router.get('/',(req,res)=>{
    res.send({privatekey,publickey});
})

module.exports= router;