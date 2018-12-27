var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var block = require('./router/server/block');
var user = require('./router/server/users');
var infoaccount = require('./router/server/account');
var app = express();
var axios = require('axios');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// const getData1 = async (i) => {
//   try {
//     return await axios.get('https://komodo.forest.network/block?height=' + i)
//   } catch (error) {
//     //console.log("loi roi")
//   }
// }
// saveBlock = async () => {
//   for (let i = 1; i < 35000; i++) {
//     const blocks = await getData1(i);
//     //console.log(blocks);
//     if (blocks != undefined) {
//       const blockData = blocks.data.result;
//       const block = new Block({
//         height: blockData.block.header.height,
//         time: blockData.block.header.time,
//         txs: blockData.block.data.txs,
//         hash: blockData.block_meta.block_id.hash,
//         appHash: blockData.block.header.app_hash,
//       })
//       if (blockData.block.data.txs != null) {
//         block.save()
//           .then(block => console.log(block.height))
//           .catch(err => console.log(err));
//       }

//     }
//     else { i = i - 1 }
//   }
// }





const getDataT = (i) => {
  if (i == 1) return block.saveBlock();
  if (i == 2) return user.createAccount();
  if (i == 3) return infoaccount.getTransactions();
  if (i == 4) return infoaccount.createFullInfo();
  if (i == 5) return infoaccount.getAllInfo();
  if (i == 6) return infoaccount.getFollowing();
  if (i == 7) return infoaccount.getFullTime();
  if (i == 8) return infoaccount.getEnergy();
  if (i == 9) setTimeout(demo, 25000); return;
}
function processArray(array) {
  return array.reduce(function (p, i) {
    return p.then(async function () {
      console.log(i);
      return await getDataT(i);
    });
  }, Promise.resolve());
}
const array = [];
for (let i = 1; i <= 9; i++) {
  array.push(i);
}
const demo = () => {
  console.log("Start: " + (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString());
  processArray(array).then(function (result) {
  }, function (reason) {
    console.log(reason);
  });
}

app.get('/database', (req, res) => {
  demo();
  //saveBlock();
  //user.createAccount();
  res.send("Đang xử lý dữ liệu");
});


//connect to mongoosedb
var db = require('./config/keys').MONGO_OFFLINE;
mongoose
  .connect(db)
  .then(() => console.log('Mongoosedb connected'))
  .catch((err) => console.log(err));
var port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

