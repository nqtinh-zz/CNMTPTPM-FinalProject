const { InteractParams, PlainTextContent, ReactContent } = require('./lib/transaction/v1');
const { sign, encode, decode } = require('./lib/transaction/index');
const axios = require('axios');
const hash = 'C902088E11C2FC5FAD41C0BAE0008D31F9191AA01CCCA48014073DF3B745C774';
const reaction = ''// Dinh dang so 1 2 3 4 5 6 0
const type = 1  //dinh dang so 1 hoac 2
const text = '';
let context = {}
let content;
if(type === 1 ){ // comment
  context ={
    type,
    text
  };
  content = PlainTextContent.encode(context);
}
if(type === 2){ //reaction
  context = {
    type,
    reaction
  }
  content= ReactContent.encode(context);
}
console.log(content);
const  tx = {
    version: 1,
    sequence: 39 + 1,
    memo: Buffer.alloc(0),
    operation: 'interact',
    params: {
      object: hash,
      content
    }
  }
  privatekey="SBS67SFDK6XTWIVB57EUZCNQO4XZXNMSFHHUJCPLVXRCEG44UGPHSE6P"
  console.log(tx);
  sign(tx, privatekey);
   const etx = encode(tx).toString('hex');
   console.log(etx);
//    axios.post('https://komodo.forest.network/broadcast_tx_commit?tx=0x' + etx)
//      .then(data => console.log("good"));
