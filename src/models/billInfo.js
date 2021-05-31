const mongoose=require('mongoose');
const billInfoSchema=new mongoose.Schema({
    billID:String,
    productID:String,
    quantity:Number,
    price:Number
});
const billInfo=mongoose.model('billInfo',billInfoSchema);
module.exports=billInfo;