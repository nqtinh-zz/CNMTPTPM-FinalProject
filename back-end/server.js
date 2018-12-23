var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var block = require('./router/server/block');
var user = require('./router/server/users');
var infoaccount = require('./router/server/account');
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

infoaccount.getEnergy();

initDatebase = () => {
  setInterval(() => block.saveBlock(), 3*1000)

  // user.createAccount();
  // infoaccount.getTransactions();
  // infoaccount.createFullInfo();
  // infoaccount.getAllInfo();
  // infoaccount.getFollowing();
  // infoaccount.getFullTime();
  // infoaccount.getEnergy();
}
app.get('/database', (req, res) => {
  initDatebase();

  // var p1 = block.saveBlock();
  // var p2 = user.createAccount();
  // var p3 = infoaccount.getTransactions();
  // var p4 = infoaccount.createFullInfo();
  // var p5 = infoaccount.getAllInfo();
  // var p6 = infoaccount.getFollowing();
  // var p7 = infoaccount.getFullTime();
  // var p8 = infoaccount.getEnergy();

  // Promise.all([p1, p2, p3, p4, p5, p6, p7, p8])
  //   .then(() => {
  //     console.log('Done!!');
  //   })
  //   .catch(err => console.log(err));
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

// getDataT = (i) => {
//     return axios.get("https://komodo.forest.network/block", {
//             params: {
//                 height: i
//             }
//         })
//         .then(res => {
//             const data = res.data;
//             const txs = data["result"]["block"]["data"]["txs"];
//             const height = data["result"]["block"]["header"]["height"];
//             const time = data["result"]["block"]["header"]["time"];
//             console.log(txs);
//             return txs;
//         });
// }

function processArray(array) {
  return array.reduce(function (p,i) {
    return p.then(function () {   
      return getDataT(i);
    });
  }, Promise.resolve());
}

const promises = [];
const array = [];
for (let t = 1; t < 5; t++) {
    array.push(t);
}

const demo =() => {
    processArray(array).then(function (result) {

    }, function (reason) {
      console.log("fail");
    });
}
demo();



