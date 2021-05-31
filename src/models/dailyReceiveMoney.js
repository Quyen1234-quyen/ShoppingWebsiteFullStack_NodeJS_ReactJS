const mongoose=require('mongoose');
const dailyReceiveMoneySchema=new mongoose.Schema({
    storeID:String,
    totalToday:Number,
    date:String
});
const dailyReceiveMoney=mongoose.model('dailyReceiveMoney',dailyReceiveMoneySchema);
module.exports=dailyReceiveMoney;