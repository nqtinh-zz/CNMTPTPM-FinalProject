const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sendPayment = require('./router/api/sendPayment');
const postNews = require('./router/api/post/post');
const updateAccount = require('./router/api/user/updateAccount');
const register = require('./router/api/user/register');
const user = require('./router/api/user/user');
const passport = require('passport');   
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//connect database
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db)
    .then(()=>console.log('Mongoosedb connected'))
    .catch((err)=>console.log(err));
//passport middleware
app.use(passport.initialize());

//passport  config
require('./config/passport')(passport);

app.use('/api/payment', sendPayment);
app.use('/api/post',postNews);
app.use('/api/update-account',updateAccount);
app.use('/api/register',register);
app.use('/api/user',user);
const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server running on port ${port}`));





// Lấy squence cuối 
// const getSequence = async()=>{
//   const blocks= await getData();
//   let sequeLast=0;
 
//   if(blocks.data)
//   {
//     blocks.data.result.txs.map(tx =>{
//       const seque = decode(Buffer.from(tx.tx,'base64'));
//       sequeLast = seque.sequence;
      
//     })
//   }
//   return sequeLast;
// }
// let sq = 0;
// getSequence()
//   .then(data=>{
//     sq = data});

/*
//Lấy amount
const printData = async () => {
  const blocks = await getData()
  let amount = 0;
  let x = 0;
  if (blocks.data) {
    blocks.data.result.txs.map(tx=>{
      let s = byteCount(tx.tx);
      //console.log(tx);
      const dataDecoded =  decode(Buffer.from(tx.tx,'base64'));
      if(dataDecoded.operation ==='payment')
      {
        //console.log(dataDecoded.params.amount);
        if(dataDecoded.params.address === publicKey)
      {
       amount+= Number(dataDecoded.params.amount);
      }else{
        amount -= Number(dataDecoded.params.amount);
      }
      }
      console.log(amount);
    });
  }
}
printData()
*/




/*
//Tính txSize
const gettxSize = ()=>{
  axios.get('https://komodo.forest.network/tx_search?query=%22account=%27'+publicKey+'%27%22').then(function (value){
      value.data.result.txs.forEach(element => {
        var str = Buffer.from(element.tx, 'base64').length;
      console.log('Bytes: '+str);
      });
    
  });
}
gettxSize();*/

//Full gettime
// var getHeight = () => new Promise(function (resolve, reject) {
//   axios.get('https://komodo.forest.network/tx_search?query=%22account=%27'+publicKey+'%27%22').then(function (response) {
//     resolve(response);
//   });
// });
// var getDataT=()=>{
//   getHeight().then(function (value) {
    
//     let data=value.data.result.txs;
//     data.forEach(element => {
//       console.log('height: '+element.height);
//       axios.get(`https://komodo.forest.network/block`, {
//         params: {
//           height: element.height
//         }
//       })
//       .then(res => {
//         const data = res.data;
//         const datatime = data["result"]["block_meta"]["header"]["time"];
//         const strtime=(new Date(datatime));
//         // let time = (parseInt(str[11])*10+parseInt(str[12]))*3600+(parseInt(str[14])*10+parseInt(str[15]))*60+parseInt(str[17])*10+parseInt(str[18])+7*3600;
//         let time =strtime.getHours()*3600+strtime.getMinutes()*60+strtime.getSeconds();
//         console.log('time: '+time);

//       })
//     });
//   });
// };
// getDataT();






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

// const axios = require('axios');
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

// function processArray(array) {
//   return array.reduce(function (p,i) {
//     return p.then(function () {  
//       return getDataT(i);
//     });
//   }, Promise.resolve());
// }

// const promises = [];
// const array = [];
// for (let t = 1; t < 5; t++) {
//     array.push(t);
// }

// const demo =() => {
//     processArray(array).then(function (result) {    
//     }, function (reason) {
//       console.log("fail");
//     });
// }
// demo();