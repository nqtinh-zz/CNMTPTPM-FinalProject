const axios = require('axios');
const { Keypair } = require('stellar-base');
const {decode} = require('./transaction/index.js');
const getData = async (publicKey) => {
  try {
    return await axios.get('https://komodo.forest.network/tx_search?query=%22account=%27'+publicKey+'%27%22')
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
  module.exports=getSequence;