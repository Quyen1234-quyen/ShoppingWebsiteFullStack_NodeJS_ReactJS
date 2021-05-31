const mongoose=require('mongoose');
const categorySchema=new mongoose.Schema({
    groupCateID:String,
    content:String,
    name:String
});
const category=mongoose.model('category',categorySchema);
module.exports=category;