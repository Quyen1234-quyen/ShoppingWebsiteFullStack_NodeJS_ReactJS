const mongoose=require('mongoose');
const accountInfoSchema=new mongoose.Schema({
    accountID:String,
    fullname:String,
    email:String,
    phone:Number,
    address:String,
    birthDay:Date
});
const accountInfo=mongoose.model('accountInfo',accountInfoSchema);
module.exports=accountInfo