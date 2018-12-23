const express = require('express');
const { sign, encode, decode } = require('../../../lib/transaction/index');
const axios = require('axios');
const getSequence = require('../../../lib/getSequence');
const router = express.Router();
const passport = require('passport');
const AllTxSchema = require('../../../models/alltx');


router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { text, type, keys, privatekey } = req.body;
  const content = { type, text }
  console.log(privatekey);
  getSequence(privatekey)
    .then(sequence => {
      const tx = {
        version: 1,
        sequence: sequence + 1,
        memo: Buffer.alloc(0),
        operation: 'post',
        params: {
          content: Buffer.from(JSON.stringify(content)),
          keys: keys
        }
      }
      sign(tx, privatekey);
      const etx = encode(tx).toString('hex');
      console.log(etx);
      axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x' + etx)
        .then(data => console.log(data.data));
    })
})

router.post('/getUserPost', passport.authenticate('jwt', { session: false }), (req, res) => {
  AllTxSchema.find({ operation: 'post', publicKey: req.body.publicKey })
    .then(data => {
      const postValid = [];
      for (i = 0; i < data.length; i++) {
        const subString1 = '{';
        const subString2 = '}';
        const subString3 = '\"type\"';
        const subString4 = '\"text\"';
        const string = data[i].post;
        if (string.includes(subString1) && string.includes(subString2) && string.includes(subString3) && string.includes(subString4)) {
         
          postValid.push(data[i]);
        }
      }
      res.send(postValid);
      console.log(postValid)
    })
})

module.exports = router;