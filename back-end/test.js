const AllTx = require('./models/alltx');
const mongoose = require('mongoose');
const following = ["GB73OPHUZC3RSDEU2LYV5T7MEAN2Q26HYQPDYIENGNBUHW5CXAQ6UJOO","GAO4J5RXQHUVVONBDQZSRTBC42E3EIK66WZA5ZSGKMFCS6UNYMZSIDBI","GDKJTGPHZET53YN6DFXXJAWMZH6ZZ5YO6T5ZGJZWBTAKUV3JVHGCESRI","GCXPMGNIECHFLUOY5XPIRE6B4NZZSDODTDWFEGOFZBGPQCRKQVBD7SIW","GAJQ47RMDTXYTCBMMW4A4DUMTB5RQLTGQZDMMABW6RTQJGKINJ4JTRTP"];

const db = require('./config/keys').MONGO_OFFLINE;
mongoose
    .connect(db)
    .then(()=>console.log('Mongoosedb connected'))
    .catch((err)=>console.log(err));


AllTx.find({publicKey: following}).sort({time:-1})
    .then(user=>{
        if(user){
            let count = 0;
            for(let i = 0 ; i < user.length; i++){
                console.log(user[i].time);
                if(user[i].time===null)
                    count++;
            }

            console.log(count);
        }else{
            console.log("cant find")
        }
        
    })
    .catch(err=>console.log("Cant find"));