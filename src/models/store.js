const mongoose=require('mongoose');
const storeSchema=new mongoose.Schema({
   nameStore:String,
   accountID:String,
   businessStoreType:String,
   addressStore:String,
   status:Boolean
});
const store=mongoose.model('store',storeSchema);
module.exports=store;