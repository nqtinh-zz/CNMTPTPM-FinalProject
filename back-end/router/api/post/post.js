const express = require('express');
const { sign, encode, decode } = require('../../../lib/transaction/index');
const { PlainTextContent, Followings } = require('../../../lib/transaction/v1');
const axios = require('axios');
const User = require('../../../models/users');
const base32 = require('base32.js');
const router = express.Router();
const passport = require('passport');
const AllTxSchema = require('../../../models/alltx');
const SimpleCrypto = require('simple-crypto-js').default

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { text, type, keys, privatekeyHash, sequence } = req.body;
  const simpleCrypto = new SimpleCrypto('some-unique-key');
  const content = { type, text }
  const tx = {
    version: 1,
    sequence: Number(sequence) + 1,
    memo: Buffer.alloc(0),
    operation: 'post',
    params: {
      content: PlainTextContent.encode(content),
      keys: keys
    }
  }
  sign(tx,  simpleCrypto.decrypt(privatekeyHash));
  const etx = encode(tx).toString('hex');
  console.log(etx);
   axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x' + etx)
   .then(data => console.log(data.data));
  res.json({ msg: etx })
})

router.post('/getUserPost', passport.authenticate('jwt', { session: false }), (req, res) => {
  AllTxSchema.find({ publicKey: req.body.publicKey }).sort({ height: -1 })
    .then(data => {
      let dataRes = [];
      for (let i = 0; i < data.length; i++) {
        let content = {};
        switch (data[i].operation) {
          case "create_account":
            content={
              text:"Created account with key : "+data[i].address,
              time: data[i].time,
              hash: data[i].hash
            }
            dataRes.push(content);
            break;
          case "payment":
          const tx = decode(Buffer.from(data[i].tx, 'base64'));
          content={
            text:"Sent "+ tx.params.amount/100000000+" to "+tx.params.address,
            time: data[i].time,
            hash: data[i].hash
          }
            break;
          case "update_account": {
            const tx = decode(Buffer.from(data[i].tx, 'base64'));
            //console.log(tx);
            switch (tx.params.key) {
              case "name":
                content = {
                  text: "Updated name to " + tx.params.value.toString(),
                  time: data[i].time,
                  hash: data[i].hash
                }
                dataRes.push(content);
                break;
              case "picture":
                content = {
                  text: "Updated picture",
                  time: data[i].time,
                  hash: data[i].hash
                }
                dataRes.push(content);
                break;
              case "followings": // Chua gan duoc name
                let text = 'followed ';
                if (tx.params.value.length >= 35) {
                  const addresses = Followings.decode(tx.params.value).addresses;
                  for (j = 0; j < addresses.length; j++) {
                    const address = base32.encode(addresses[j]);
                   text+= address+", "
                  }
                  dataRes.push({text, time: data[i].time, hash: data[i].hash});
                }else{
                  dataRes.push({
                    text:"Follow bay ba",
                    time: data[i].time,
                    hash: data[i].hash
                  })
                }
                
                break;
            }
          }
            break;
          case "post": 
            content={
              text: "Posted "+ data[i].post,
              time: data[i].time,
              hash: data[i].hash
            }
            dataRes.push(content);
            break;
        }
      }
      res.send(dataRes);
    })
})

module.exports = router;