var express = require('express');
var router = express.Router();
var blocks = require('../models/blocks');
var { decode } = require('../lib/transaction/index');
router.get("/users", function (req, res) {
  //Sửa lại chạy sau khi  for (i; i <= curheight; i++) của bên server kết thúc
  console.log("data");
  blocks.find({}).then((block) => {
    for (let i = 0; i < block.length; i++) {
      //let data = block[i].data.toString();
      let txs = decode(Buffer.from(block[i].txs, 'base64'));
      let operation = txs.operation;

      if (operation == 'create_account') {
        const users = new User(
          {
            publicKey: txs.params.address,
            name:null,
            avatar:null,
            balance:0,
            sequence:0,
            bandwidth:0,
            energy:0,
            post:null,
            following:null,
            transactions:0,
          })
        users.save();
      }
      console.log(txs);
    }



    //res.send(txs);
  })

});

module.exports = router;