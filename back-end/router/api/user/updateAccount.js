const express = require('express');
const base32 = require('base32.js');
const { Followings } = require('../../../lib/transaction/v1');
const { sign, encode } = require('../../../lib/transaction/index');
const passport = require('passport');
const axios = require('axios');
const router = express.Router();
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { key,value, privatekey, sequence } = req.body.data;
  let tx;
  switch (key) {
    case 'name':
      tx = {
        version: 1,
        sequence: Number(sequence)+1,
        memo: Buffer.alloc(0),
        operation: 'update_account',
        params: {
          key,
          value: Buffer.from(value, 'utf-8'),
        }
      }
      break;
    case 'picture':
      tx = {
        version: 1,
        sequence: Number(sequence) + 1,
        memo: Buffer.alloc(0),
        operation: 'update_account',
        params: {
          key,
          value: Buffer.from(value, 'base64')
        }
      }
      break;
    case 'followings':
    console.log(value);
      let addressBuffer = { addresses: [] };
      for (i = 0; i < value.length; i++) {
        addressBuffer.addresses.push(Buffer.from(base32.decode(value[i])));
      }
      console.log(addressBuffer);
      tx = {
        version: 1,
        sequence: Number(sequence)+1,
        memo: Buffer.alloc(0),
        operation: 'update_account',
        params: {
          key,
          value: Followings.encode(addressBuffer),
        }
      }
      break;
  }
  sign(tx, privatekey);
   const etx = encode(tx).toString('hex');
   console.log(etx);
   axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x' + etx)
     .then(data => console.log("good"));
})



module.exports = router;