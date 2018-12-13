//test net
const {sign,encode, decode} = require('./lib/transaction/index');
const publicKey ='GDMNG3PLGUMPHXPPMRZ7EQRMT34F4JU6574OZIQL3LIK5P76CVW5QMTL';
const axios = require('axios');
const getData = async () => {
  try {
    return await axios.get('https://komodo.forest.network/tx_search?query=%22account=%27'+publicKey+'%27%22')
  } catch (error) {
    console.error(error)
  }
}

const printData = async () => {
  const blocks = await getData()

  if (blocks.data) {
    blocks.data.result.txs.map(tx=>{
      //console.log(tx);
      console.log(decode(Buffer.from(tx.tx,'base64')));
    });
  }
}

printData()


//send token:
const tx= {
  version: 1,
  sequence : 3,
  memo: Buffer.alloc(0),
  operation:'payment',
  params:{
    address:"GCRS2HC6SXXKZ34PWWX35ZH7BSGBLBATIG4GMKASPY7GBUXEMRP2OLJM",
    amount: 1
  }
}
sign(tx, 'SBS67SFDK6XTWIVB57EUZCNQO4XZXNMSFHHUJCPLVXRCEG44UGPHSE6P');
const etx=encode(tx).toString('hex');
console.log(etx);

const sendToken = async () => {
  try {
    return await axios.get('https://komodo.forest.network/broadcast_tx_commit?tx=0x'+etx)
  } catch (error) {
    console.error(error)
  }
}
sendToken();