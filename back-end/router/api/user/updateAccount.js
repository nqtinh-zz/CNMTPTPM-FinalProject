const express = require('express');
const getSequence = require('../../../lib/getSequence');
const base32 = require('base32.js');
const { Followings} = require('../../../lib/transaction/v1');
const {sign,encode, decode} = require('../../../lib/transaction/index');
const passport = require('passport');
const axios = require('axios');
const router = express.Router();
router.post('/', passport.authenticate('jwt',{session:false}),(req,res)=>{
    //const {key, value, privatekey} = req.body;
    const key = 'followings';
    let addressBuffer = {addresses:[]};
    const addresses = ['GB73OPHUZC3RSDEU2LYV5T7MEAN2Q26HYQPDYIENGNBUHW5CXAQ6UJOO','GAO4J5RXQHUVVONBDQZSRTBC42E3EIK66WZA5ZSGKMFCS6UNYMZSIDBI'];
    for(i = 0; i < addresses.length; i++){
     addressBuffer.addresses.push(Buffer.from(base32.decode(addresses[i])));
    }
    console.log(addressBuffer);
    console.log(Followings.encode(addressBuffer));
    const privatekey = 'SBS67SFDK6XTWIVB57EUZCNQO4XZXNMSFHHUJCPLVXRCEG44UGPHSE6P';
    getSequence(privatekey)
    .then(sequence=>{
      console.log(sequence);
      let tx={};
      if(key === 'name')
      {
        tx= {
          version: 1,
          sequence :sequence+1,
          memo: Buffer.alloc(0),
          operation:'update_account',
          params:{
            value:Buffer.from(value,'utf-8'),
            key
          }
        }
      }
      if(key === 'picture')
      {
        tx= {
          version: 1,
          sequence :sequence+1,
          memo: Buffer.alloc(0),
          operation:'update_account',
          params:{
            value:Buffer.from(value,'base64'),
            key
          }
        }
      }
      if(key === 'followings'){
        tx= {
          version: 1,
          sequence :sequence+1,
          memo: Buffer.alloc(0),
          operation:'update_account',
          params:{
            value:Followings.encode(addressBuffer),
            key
          }
        }
        console.log("abc");
       
    }
    
      sign(tx, privatekey);
      const etx=encode(tx).toString('hex');
      console.log(etx);
        //  axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x'+etx)
        //    .then(data=>console.log("good"));
    })
      
})

module.exports = router;