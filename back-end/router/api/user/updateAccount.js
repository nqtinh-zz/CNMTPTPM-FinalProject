const express = require('express');
const getSequence = require('../../../lib/getSequence');
const base32 = require('base32.js');
const { Followings } = require('../../../lib/transaction/v1');
const { sign, encode, decode } = require('../../../lib/transaction/index');
const passport = require('passport');
const axios = require('axios');
const router = express.Router();
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { key, value, privatekey, sequence, publicKey } = req.body;
  let tx = {};
  if (key === 'name') {
    tx = {
      version: 1,
      sequence: sequence + 1,
      memo: Buffer.alloc(0),
      operation: 'update_account',
      params: {
        value: Buffer.from(value, 'utf-8'),
        key
      }
    }
  }
  if (key === 'picture') {
    tx = {
      version: 1,
      sequence: sequence + 1,
      memo: Buffer.alloc(0),
      operation: 'update_account',
      params: {
        value: Buffer.from(value, 'base64'),
        key
      }
    }
  }
  if (key === 'followings') {
    let addressBuffer = { addresses: [] };
    value.push(publicKey);
    for (i = 0; i < value.length; i++) {
      addressBuffer.addresses.push(Buffer.from(base32.decode(value[i])));
    }
    tx = {
      version: 1,
      sequence: 32,
      memo: Buffer.alloc(0),
      operation: 'update_account',
      params: {
        value: Followings.encode(addressBuffer),
        key
      }
    }
    console.log("abc");

  }

  sign(tx, privatekey);
  const etx = encode(tx).toString('hex');
  console.log(etx);
  axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x' + etx)
    .then(data => console.log("good"));
})



module.exports = router;