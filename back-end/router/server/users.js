var blocks = require('../../models/blocks');
var { decode } = require('../../lib/transaction/index');
exports.createAccount=()=> {
  //Sửa lại chạy sau khi  for (i; i <= curheight; i++) của bên server kết thúc
  blocks.find({}).then((block) => {
    for (let i = 0; i < block.length; i++) {
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
    }
  })
};

