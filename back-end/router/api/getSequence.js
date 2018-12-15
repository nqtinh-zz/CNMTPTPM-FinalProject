const axios = require('axios');
const {decode} = require('../../lib/transaction/index.js');
const getData = async (publicKey) => {
  try {
    return await axios.get('https://komodo.forest.network/tx_search?query=%22account=%27'+publicKey+'%27%22')
  } catch (error) {
    console.error(error)
  }
}

getSequence = async(publicKey)=>{
    const blocks= await getData(publicKey);
    let sequeLast=0;
   
    if(blocks.data)
    {
      blocks.data.result.txs.map(tx =>{
        const seque = decode(Buffer.from(tx.tx,'base64'));
        // console.log(seque);
        sequeLast = seque.sequence;
        
      })
    }
    console.log('squence'+sequeLast);
    return sequeLast;
  }