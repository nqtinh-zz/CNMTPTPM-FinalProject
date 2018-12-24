const express = require('express');
const { sign, encode, decode } = require('../../../lib/transaction/index');
const {PlainTextContent } = require('../../../lib/transaction/v1');
const axios = require('axios');
const router = express.Router();
const passport = require('passport');
const AllTxSchema = require('../../../models/alltx');


router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { text, type, keys, privatekey , sequence} = req.body;
  const content = { type, text }
      const tx = {
        version: 1,
        sequence: sequence + 1,
        memo: Buffer.alloc(0),
        operation: 'post',
        params: {
          content:  PlainTextContent.encode(content),
          keys: keys
        }
      }
      sign(tx, privatekey);
      const etx = encode(tx).toString('hex');
      console.log(etx);
     // axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x' + etx)
       // .then(data => console.log(data.data));
       res.json({msg:etx})
    })

router.post('/getUserPost', passport.authenticate('jwt', { session: false }), (req, res) => {
  AllTxSchema.find({  publicKey: req.body.publicKey })
    .then(data => {
      // const postValid = [];
      // for (i = 0; i < data.length; i++) {
      //   const subString1 = '{';
      //   const subString2 = '}';
      //   const subString3 = '\"type\"';
      //   const subString4 = '\"text\"';
      //   const string = data[i].post;
      //   if (string.includes(subString1) && string.includes(subString2) && string.includes(subString3) && string.includes(subString4)) {
         
      //     postValid.push(data[i]);
      //   }
      // }
      res.send(data);
     // console.log(data)
    })
})

module.exports = router;