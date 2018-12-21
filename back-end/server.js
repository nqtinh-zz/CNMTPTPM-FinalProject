const express = require('express');
const block = require('./models/blocks');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
var users = require('./router/users');
var account = require('./router/account');
//DB config
// đang test chưa xài đc
const getData1 = async (i) => {
  try {
    return await axios.get('https://komodo.forest.network/block?height=' + i)
  } catch (error) {
    console.log("loi roi")
  }
}
const saveBlock = async () => {
  await axios.get('https://fox.forest.network/abci_info')
    .then(function (response) {
      let curheight = response.data.result.response.last_block_height;
      console.log(curheight);
      block.find({}).sort({ height: -1 }).then((data) => {
        //console.log(data[0].height);
        let i = data[0].height;
        for (i; i <= curheight; i++) {
          const save = async () => {
            const blocks = await getData1(i);
            const blockData = blocks.data.result;
            let time=blockData.block.header.time.setHours( blockData.block.header.time.getHours() + 7 );
            const block = new Block({
              height: blockData.block.header.height,
              //đổi h +7 lên nữa nha
              time: time,
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
          save().then(() => console.log("Lấy full block"));
        }
      });

    })
    .catch(function (error) {
      console.log(error);
    })
  // for (i = 1; i < 14330; i++) {
  //   const blocks = await getData1(i);
  //   const blockData = blocks.data.result;   
  //   const block = new Block({
  //     height: blockData.block.header.height,
  //     time: blockData.block.header.time,
  //     txs: blockData.block.data.txs,
  //     hash: blockData.block_meta.block_id.hash,
  //     appHash: blockData.block.header.app_hash,
  //   })
  //   if (blockData.block.data.txs != null) {
  //     block.save()
  //       .then(block => console.log(block.height))
  //       .catch(err => console.log(err));
  //   }
  // }
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