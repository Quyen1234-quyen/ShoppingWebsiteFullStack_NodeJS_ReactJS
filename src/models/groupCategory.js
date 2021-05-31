const mongoose=require('mongoose');
const groupCateSchema=new mongoose.Schema({
    name:String,
    content:String
});
const groupCate=mongoose.model('groupCate',groupCateSchema);
module.exports=groupCate;