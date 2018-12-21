const express = require('express');
const Block = require('./models/blocks');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
var users = require('./router/users');
var account = require('./router/account');
//DB config

const getData1 = async (i) => {
  try {
    return await axios.get('https://komodo.forest.network/block?height=' + i)
  } catch (error) {
    console.log("loi roi")
  }
}


// getSequence = async (secret) => {
//   const keyPublic = Keypair.fromSecret(secret).publicKey();
//   const blocks = await getData(keyPublic);
//   let sequeLast = 0;

//   if (blocks.data) {
//     blocks.data.result.txs.map(tx => {
//       const seque = decode(Buffer.from(tx.tx, 'base64'));
//       // console.log(seque);
//       sequeLast = seque.sequence;

//     })
//   }
//   return sequeLast;
// }
const saveBlock = async () => {
  for (i = 1; i < 14330; i++) {
    const blocks = await getData1(i);
    const blockData = blocks.data.result;   
    const block = new Block({
      height: blockData.block.header.height,
      time: blockData.block.header.time,
      txs: blockData.block.data.txs,
      hash: blockData.block_meta.block_id.hash,
      appHash: blockData.block.header.app_hash,
    })
    if (blockData.block.data.txs != null) {
      block.save()
        .then(block => console.log(block.height))
        .catch(err => console.log(err));
    }

  }
  // Block.find({}).sort([['height', -1]]).exec(function (err, docs) { console.log(err) });
}



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/save-block', (req, res) => {
  saveBlock();
  res.send("Loading node");
});


app.use('/', users);
app.use('/', account);


//connect to mongoosedb
const db = require('./config/keys').MONGO_OFFLINE;
mongoose
  .connect(db)
  .then(() => console.log('Mongoosedb connected'))
  .catch((err) => console.log(err));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));