const mongoose=require('mongoose');
const accountSchema=new mongoose.Schema({
   email:String,
   password:String,
   types:Number,
   status:Boolean
});
const account=mongoose.model('account',accountSchema);
module.exports=account;