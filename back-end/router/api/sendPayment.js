const express = require('express');
const {sign,encode, decode} = require('../../lib/transaction/index');
const axios = require('axios');
const router = express.Router();
const sendToken = async (etx) => {
    try {
      return await axios.get('https://komodo.forest.network/broadcast_tx_commit?tx=0x'+etx)
    } catch (error) {
      console.error(error)
    }
    console.log(etx);
  }
router.post('/send', (req,res)=>{
    console.log(req.body);
    const {publickey, amount, privatekey} = req.body;
    const tx= {
        version: 1,
        sequence :8,
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

module.exports = router;