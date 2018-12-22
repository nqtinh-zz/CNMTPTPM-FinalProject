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



const db = require('./config/keys').mongoURI;
mongoose
    .connect(db)
    .then(()=>console.log('Mongoosedb connected'))
    .catch((err)=>console.log(err));


app.use(passport.initialize());


require('./config/passport')(passport);

app.use('/api/payment', sendPayment);
app.use('/api/post',postNews);
app.use('/api/update-account',updateAccount);
app.use('/api/register',register);
app.use('/api/user',user);
const port = process.env.PORT || 5000;
const axios = require('axios');
const {decode,encode,sign}=require('./lib/transaction/index');
const {Followings}=require('./lib/transaction/v1');

const base32 = require('base32.js');
var users = require('./models/users');

const getData = async (keyy) => {
    try {
        return await axios.get('https://komodo.forest.network/tx_search?query=%22account=%27' + keyy + '%27%22')
    } catch (error) {
        console.error(error)
    }
}


const getUser = ()=>{
    var key = [];
    console.log("data");
    users.find({}).then((data) => {
        for (let i = 0; i < data.length; i++) {
            let tmp = data[i].publicKey;
            key.push(tmp);
        }
        for (let i = 0; i < 1; i++) {
            let keyy = 'GDLLXAEH3MYZ3IYEE4JNVYPXXQDA5HY6JMVLU7UFNZJVY7CDVCURFED3';
            console.log(keyy);     
            var getData2 = async(keyy)=>{
                var data= await getData(keyy);
                data.data.result.txs.map(tx =>{
                  const txdata = decode(Buffer.from(tx.tx,'base64'));
                  var operation=txdata.operation;
                  if(operation==="update_account")
                  {
                    if(txdata.params.key ==='followings')
                    {
                         var dtvalue=txdata.params.value;
                        var y=Followings.decode(dtvalue);
                        const add = y.addresses;
                        add.map((item,index)=>{
                            console.log(base32.encode(item))
                        })
                        console.log(Followings.decode(dtvalue));

                    }
                  }

                })

            };
             getData2(keyy);
        }


        })

}

getUser();


{/*var ten="Nguyen Neirt";
const tx= {
  version: 1,
  sequence : 9,
  memo: Buffer.alloc(0),
  operation:'update-account',
  params:{
    
    value: Buffer.from(ten,'utf-8'),
    key: "name"
   
    
  }
}
sign(tx, 'SBGQIYPLJGXMDXHG7T5ZQLG6YWZBS4KPPUPNEAWLHLHZB55B4ULS3YUP');
const etx=encode(tx).toString('hex');
console.log(etx);
*/}


{/*let data2="ATDWu4CH2zGdowQnEtrh97wGDp8eSyq6foVuU1x8Q6ipEpB7AAAAAAAAAC0ABAB4CmZvbGxvd2luZ3MAawADMB3E9jeB6Vq5oRwzKMwi5omyIV71sg7mRlMKKXqNwzMkDCgwL1XhNMNH6CjHVwpmc5dW6f+pOO8rOiWodHAJOo49ne3D8DDWu4CH2zGdowQnEtrh97wGDp8eSyq6foVuU1x8Q6ipEpB7PTYCbXVd4gjhHTZwJgcf3dfGB7sB+ZZQw8A98V2vlY58BImVaCnVpJhoE5cSjMEk+YwZ0vfzYheytIogh05GAQ==";
    var xxx=decode(Buffer.from(data2,'base64'));
    var y=base32.encode(xxx.params.value);
    console.log("xx: ",xxx.params.valuex);
    
    console.log("encode: ",y);*/}


{/*
const getData = async() =>{
  var i=0;
  for(i=0;i<1;i++)
  {
    var t=15288;
    var x = await axios.get('https://komodo.forest.network/block?height=%22'+t+'%22');
    if(x.data)
    {
        var vheight=x.data.result.block.header.height;
        var vtxs=x.data.result.block.data.txs;
        axios.post(
            'https://api.mlab.com/api/1/databases/chatfinal01/collections/data_01?apiKey=DhIXZARMoECCJ5edpVHEgsv76dT4xwHq',
            {
                height: vheight,
                txs: vtxs
            }
        );

    } 
  }
  
      

}

getData();  */}

{/* 
    var txs='ATDWu4CH2zGdowQnEtrh97wGDp8eSyq6foVuU1x8Q6ipEpB7AAAAAAAAAC0ABAB4CmZvbGxvd2luZ3MAawADMB3E9jeB6Vq5oRwzKMwi5omyIV71sg7mRlMKKXqNwzMkDCgwL1XhNMNH6CjHVwpmc5dW6f+pOO8rOiWodHAJOo49ne3D8DDWu4CH2zGdowQnEtrh97wGDp8eSyq6foVuU1x8Q6ipEpB7PTYCbXVd4gjhHTZwJgcf3dfGB7sB+ZZQw8A98V2vlY58BImVaCnVpJhoE5cSjMEk+YwZ0vfzYheytIogh05GAQ==';

var xxx=decode(Buffer.from(txs,'base64'));
console.log(xxx);
    var y=base32.encode(xxx.params.value);
    console.log("xx: ",xxx.params.value);
    
    console.log("encode: ",y);
*/}







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