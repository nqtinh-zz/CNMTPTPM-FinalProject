
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const sendPayment = require('./router/api/sendPayment');
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sendPayment = require('./router/api/sendPayment');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/api/payment', sendPayment);

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server running on port ${port}`));



//test net

// const {sign,encode, decode} = require('./lib/transaction/index');
// const publicKey ='GBYL3XK3TE3BP57FA7X7BJJT2ORI2VI7RDJUEJW65TZ5NR5RO3H5IXAW';
// const axios = require('axios');
// const getData = async () => {
//   try {
//     return await axios.get('https://komodo.forest.network/tx_search?query=%22account=%27'+publicKey+'%27%22')
//   } catch (error) {
//     console.error(error)
//   }
// }
// function byteCount(s) {
//   return encodeURI(s).split(/%..|./).length - 1;
// }

// const printData = async () => {
//   const blocks = await getData()
//   let amount = 0;
//   let x = 0;
//   if (blocks.data) {
//     blocks.data.result.txs.map(tx=>{
//       let s = byteCount(tx.tx);
//       //console.log(tx);
//       const dataDecoded =  decode(Buffer.from(tx.tx,'base64'));
//       if(dataDecoded.operation ==='payment')
//       {
//         //console.log(dataDecoded.params.amount);
//         if(dataDecoded.params.address === publicKey)
//       {
//        amount+= Number(dataDecoded.params.amount);
//       }else{
//         amount -= Number(dataDecoded.params.amount);
//       }
//       }
//       console.log(amount);
//     });
   
//   }
  
// }

// printData()

//Tính txSize
// function byteCount() {
//   var str = Buffer.from('tx', 'base64');
//   console.log(str.length);
// }
// byteCount();

//Lấy time
/*
axios.get(`https://komodo.forest.network/block`, {
  params: {
    height: 5150
  }
})
  .then(res => {
    const data = res.data;
    const datatime = data["result"]["block_meta"]["header"]["time"];
    const strtime=(new Date(datatime));
    // let time = (parseInt(str[11])*10+parseInt(str[12]))*3600+(parseInt(str[14])*10+parseInt(str[15]))*60+parseInt(str[17])*10+parseInt(str[18])+7*3600;
    let time =strtime.getHours()*3600+strtime.getMinutes()*60+strtime.getSeconds();
    console.log(time);
  })
*/

// //send token:
// const tx= {
//   version: 1,
//   sequence : 3,
//   memo: Buffer.alloc(0),
//   operation:'payment',
//   params:{
//     address:"GCRS2HC6SXXKZ34PWWX35ZH7BSGBLBATIG4GMKASPY7GBUXEMRP2OLJM",
//     amount: 1
//   }
// }
// sign(tx, 'SBS67SFDK6XTWIVB57EUZCNQO4XZXNMSFHHUJCPLVXRCEG44UGPHSE6P');
// const etx=encode(tx).toString('hex');
// console.log(etx);


//send token:
// const tx= {
//   version: 1,
//   sequence : 3,
//   memo: Buffer.alloc(0),
//   operation:'payment',
//   params:{
//     address:"GCRS2HC6SXXKZ34PWWX35ZH7BSGBLBATIG4GMKASPY7GBUXEMRP2OLJM",
//     amount: 1
//   }
// }
// sign(tx, 'SBS67SFDK6XTWIVB57EUZCNQO4XZXNMSFHHUJCPLVXRCEG44UGPHSE6P');
// const etx=encode(tx).toString('hex');
// console.log(etx);


// const sendToken = async () => {
//   try {
//     return await axios.get('https://komodo.forest.network/broadcast_tx_commit?tx=0x'+etx)
//   } catch (error) {
//     console.error(error)
//   }
// }
// sendToken();