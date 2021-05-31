const mongoose=require('mongoose');
const billSchema=new mongoose.Schema({
    NotiID:String,
    status:Boolean,
    date:String,
    quantity:Number,
    total:Number
});
const bill=mongoose.model('bill',billSchema);
module.exports=bill;