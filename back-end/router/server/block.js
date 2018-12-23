var axios = require('axios');
var block = require('../../models/blocks');
const getData1 = async (i) => {
    try {
        return await axios.get('https://komodo.forest.network/block?height=' + i)
    } catch (error) {
        console.log("loi roi")
    }
}
exports.saveBlock = async () => {
    await axios.get('https://fox.forest.network/abci_info')
        .then(function (response) {
            let curheight = response.data.result.response.last_block_height;
            console.log(curheight);
            block.find({}).sort({ height: -1 }).then((data) => {
                //console.log(data[0].height);
                let i = data[0].height;
                for (i; i <= curheight; i++) {
                    const save = async () => {
                        const blocks = await getData1(i);
                        const blockData = blocks.data.result;
                        const block = new Block({
                            height: blockData.block.header.height,

                            time: blockData.block.header.time,
                            txs: blockData.block.data.txs,
                            hash: blockData.block_meta.block_id.hash,
                            appHash: blockData.block.header.app_hash,
                        })
                        if (blockData.block.data.txs != null) {
                            block.save()
                                .then(block => console.log(block.height))
                                .catch(err => console.log(err));
                        }
                    }
                    save().then(() => console.log("Đang lưu"));
                }
            });

        })
        .catch(function (error) {
            console.log(error);
        })
        console.log("Đã xong~~~~~~~~~~")
    //chạy cái này trước để có dữ liệu trong block đã
    // for (i = 1; i < 18000; i++) {
    //   const blocks = await getData1(i);
    //   const blockData = blocks.data.result;
    //   const block = new Block({
    //     height: blockData.block.header.height,
    //     time: blockData.block.header.time,
    //     txs: blockData.block.data.txs,
    //     hash: blockData.block_meta.block_id.hash,
    //     appHash: blockData.block.header.app_hash,
    //   })
    //   if (blockData.block.data.txs != null) {
    //     block.save()
    //       .then(block => console.log(block.height))
    //       .catch(err => console.log(err));
    //   }
    // }
}