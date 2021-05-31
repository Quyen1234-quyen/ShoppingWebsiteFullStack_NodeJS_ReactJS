const mongoose=require('mongoose'); 
const URL='mongodb+srv://quyen:123@shopifyshop-qmyoq.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(URL, { useNewUrlParser: true,useFindAndModify:false }).then(result=>{
    console.log("Connect DB");
}).catch(err=>{
    console.log('Connect DB fail');
});
module.exports=mongoose;

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://quyen:123@shopifyshop-qmyoq.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect().then(client=>{
//     const collection = client.db("shopifyshop").collection("devices");
//     collection.insertOne({name:"1"})
//     console.log("ngon");
// }).catch(err=>{
//     console.log('lolo');
// })