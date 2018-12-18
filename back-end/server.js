const express = require('express');
const User = require('./models/User');
const Block = require('./models/Block');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
//DB config

const getData = async (i) => {
    try {
      return await axios.get('https://komodo.forest.network/block?height='+i)
    } catch (error) {
      console.log("loi roi")
    }
  }
  
  
  getSequence = async(secret)=>{
      const keyPublic = Keypair.fromSecret(secret).publicKey();
      const blocks= await getData(keyPublic);
      let sequeLast=0;
     
      if(blocks.data)
      {
        blocks.data.result.txs.map(tx =>{
          const seque = decode(Buffer.from(tx.tx,'base64'));
          // console.log(seque);
          sequeLast = seque.sequence;
          
        })
      }
      return sequeLast;
    }
 const saveBlock = async()=>{
    // for( i = 1; i  < 9485; i++){
    //     const blocks= await getData(i);
    //      const blockData = blocks.data.result.block;
    //             const block = new Block({
    //                 height: blockData.header.height,
    //                 time : blockData.header.time,
    //                 data: blockData.data.txs,
    //                 hash: blockData.header.data_hash,
    //             })
    //             block.save()
    //                 .then(block =>console.log(block.height))
    //                 .catch(err=> console.log(err));
           
    // }
    Block.find({}).sort([['height', -1]]).exec(function(err, docs) { console.log(err) });
}



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/save-block',(req,res)=>{
    saveBlock();
    res.send("Loading node");
});
//connect to mongoosedb
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db)
    .then(()=>console.log('Mongoosedb connected'))
    .catch((err)=>console.log(err));
const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server running on port ${port}`));