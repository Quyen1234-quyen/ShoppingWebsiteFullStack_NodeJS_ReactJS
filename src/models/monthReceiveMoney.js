const mongoose=require('mongoose');
const monthlyReceiveMoneySchema=new mongoose.Schema({
    storeID:String,
    totalToday:Number,
    month:String
});
const monthlyReceiveMoney=mongoose.model('monthlyReceiveMoney',monthlyReceiveMoneySchema);
module.exports=monthlyReceiveMoney;