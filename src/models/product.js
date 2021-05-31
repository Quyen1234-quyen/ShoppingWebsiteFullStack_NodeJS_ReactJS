const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    cateID:String,
    name:String,
    price:Number,
    costPrice:Number,
    rating:Number,
    status:Boolean,
    inventory:Number,
    img:String,
    storeID:String
});
const product=mongoose.model('product',productSchema);
module.exports=product