var express = require('express');
var router = express.Router();
var block = require('../models/block');
var { decode } = require('../lib/transaction/index');
router.get("/users", function (req, res) {
  var tmp = [];

  console.log("data");
  block.find({}).then((block) => {
    for (let i = 0; i < block.length; i++) {
      let data = block[i].data.toString();
      let txs = decode(Buffer.from(data, 'base64'));
      let operation = txs.operation;

      if (operation == 'create_account') {
        const users = new User(
          {
            publicKey: txs.params.address,
            name: null,
            avatar: null,
            sequence: null,
            balance: null,
            energy: null,
            transactions: null
          })
        users.save();
      }
      console.log(txs);
    }



    //res.send(txs);
  })

});

module.exports = router;