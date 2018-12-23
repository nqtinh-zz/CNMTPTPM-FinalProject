var blocks = require('../../models/blocks');
var users = require('../../models/User');
var { decode } = require('../../lib/transaction/index');
exports.createAccount = async () => {
  //users.dropDatabase();
  //Sửa lại chạy sau khi  for (i; i <= curheight; i++) của bên server kết thúc
  const block = await blocks.find({});
  let arr = [];
  for (let i = 0; i < block.length; i++) {
    let txs = decode(Buffer.from(block[i].txs, 'base64'));
    let operation = txs.operation;

    if (operation == 'create_account') {
      arr.push(new Promise(async (resolve) => {
        const users = new User(
          {
            publicKey: txs.params.address,
            name: null,
            avatar: null,
            balance: 0,
            sequence: 0,
            bandwidth: 0,
            energy: 0,
            post: null,
            following: null,
            transactions: 0,
          })
        try {

          await users.save();
        } catch (error) {

        }
        resolve("");
      }));
    }
  }
  console.log("Tạo user");
  const result = await Promise.all(arr);
  console.log(result);
  return result;
};

