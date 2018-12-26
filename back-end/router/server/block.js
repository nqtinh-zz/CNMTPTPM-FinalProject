var axios = require('axios');
var block = require('../../models/blocks');
var alltx = require('../../models/alltx');
var { encode, decode, decodeFollowings, ReactContent, PlainTextContent } = require('../../lib/transaction/v1');
const getData1 = async (i) => {
    try {
        return await axios.get('https://komodo.forest.network/block?height=' + i)
    } catch (error) {
        //console.log("loi roi")
    }
}
//tối ưu hóa chỗ tạo ra các thay đổi user để tránh duyệt từ đầu đến cuối bảng users
exports.saveBlock = async () => {
    const response = await axios.get('https://fox.forest.network/abci_info');
    let curheight = response.data.result.response.last_block_height;
    console.log(curheight);
    const data = await block.find({}).sort({ height: -1 });
    let i = data[0].height + 1;
    console.log(i);
    await block.findOneAndUpdate({ height: data[0].height },
        {
            $set: {

                lastheightposi: data[0].height,
            }
        })
    let arr = [];
    for (i; i <= curheight; i++) {
        arr.push(new Promise(async (resolve) => {
            const blocks = await getData1(i);

            console.log(i+'----'+blocks);
            if (blocks != undefined) {
                console.log('i----' + i)
                const blockData = blocks.data.result;
                let tmptxs = blockData.block.data.txs;
                if (tmptxs != null) {
                    for (let n = 0; n < tmptxs.length; n++) {
                        let tmpaction = [];
                        let decoded = decode(Buffer.from(tmptxs[n], 'base64'));
                        if (decoded.operation == 'interact') {
                            tmpaction.push(decoded.account);
                            await alltx.find({ hash: decoded.params.object }).then((arr) => {
                                for (let j = 0; j < arr.length; j++) {
                                    tmpaction.push(arr[j].publicKey);
                                }
                            });
                        }
                        if (decoded.operation == 'payment') {
                            tmpaction.push(decoded.account);
                            tmpaction.push(decoded.params.address);
                        }
                        if (decoded.operation == 'create_account') {
                            tmpaction.push(decoded.params.address);
                            tmpaction.push(decoded.account);
                        }
                        else {
                            tmpaction.push(decoded.account);
                        }
                        const block = new Block({
                            height: blockData.block.header.height,
                            time: blockData.block.header.time,
                            txs: blockData.block.data.txs,
                            hash: blockData.block_meta.block_id.hash,
                            appHash: blockData.block.header.app_hash,
                            newActionUser: tmpaction,

                        })

                        await block.save();

                    }
                }

            }
            else { i = i - 1 }
            resolve("test");
        }));
    }
    // let arr = [];
    // for (let i = 0; i < 35000; i++) {    
    //     arr.push(new Promise(async (resolve) => {
    //         const blocks = await getData1(i);
    //         if (blocks != undefined) {
    //             const blockData = blocks.data.result;
    //             const block = new Block({
    //                 height: blockData.block.header.height,
    //                 time: blockData.block.header.time,
    //                 txs: blockData.block.data.txs,
    //                 hash: blockData.block_meta.block_id.hash,
    //                 appHash: blockData.block.header.app_hash,
    //             })
    //             if (blockData.block.data.txs != null) {
    //                 block.save()
    //                     .then(block => console.log(block.height))
    //                     .catch(err => console.log(err));
    //             }
    //         }
    //         else { i = i - 1 }
    //         resolve("test");
    //     }));
    // }
    console.log("Tạo full block");
    const result = await Promise.all(arr);
    console.log(result);
    return result;
}



