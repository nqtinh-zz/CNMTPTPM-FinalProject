var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var block = require('./router/server/block');
var user = require('./router/server/users');
var infoaccount = require('./router/server/account');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const getDataT = (i) => {
  if (i == 1) return block.saveBlock();
  if (i == 2) return user.createAccount();
  if (i == 3) return infoaccount.getTransactions();
  if (i == 4) return infoaccount.createFullInfo();
  if (i == 5) return infoaccount.getAllInfo();
  if (i == 6) return infoaccount.getFollowing();
  if (i == 7) return infoaccount.getFullTime();
  if (i == 8) return infoaccount.getEnergy();
  
}

function processArray(array) {
  return array.reduce(function (p, i) {
      return p.then( async function () {
        console.log(i);
          return await getDataT(i);
      });
  }, Promise.resolve());
}

const array = [];
for (let i = 1; i <= 8; i++) {
  array.push(i);
}

const demo = () => {
  processArray(array).then(function (result) {
  }, function (reason) {
      console.log(reason);
  });
}

//demo();

app.get('/database', (req, res) => {

demo();
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

