var Product=require('../models/product');

exports.FindProductByStore= async (req,res)=>{
    var id = req.params.id;
    await product.find({ storeid : id }, function (err, docs) {
        res.json(docs);
    });
}
exports.FindProductByCate= async (req,res)=>{
    var id = req.params.id;
    await product.find({ cateID : id }, function (err, docs) {
        res.json(docs);
    });
}
exports.FindProductByGroupCate= async (req,res)=>{
    var id = req.params.id;
    await product.find({ groupid : id }, function (err, docs) {
        res.json(docs);
    });
}
exports.GetAllProduct = async (req, res) =>{
    const product=await Product.find();
    res.json(product);
}
exports.AddProduct = async (req, res) => {
    const {cateID,name,price,costPrice,rating,countRating,status,inventory,img,storeID,groupid}=req.body;
    const product=new Product({cateID,name,price,costPrice,rating,countRating,status,inventory,img,storeID,groupid});
    await product.save();
    res.json(product);
}
exports.AddProductWithImg=(req,res)=>{
    var {img}=req.files;
    var {name,cateID}=req.body;
    console.log(name,cateID)
    //var uploadPath=path.join(__dirname, '../../public/img/'+img.name);
    var now = Date.parse(new Date(), 'yMdhms');
    const dir = path.join(__dirname,'../../public/img/'+now);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        console.log("tao tanh cong");
    }else{
        console.log("tao that bai");
    }
    img.mv(path.join(__dirname,'../../public/img/'+now+'/'+img.name),err=>{
        if(err){
            return res.status(500);
        }else{
            res.end();
        }
    });
}
exports.UpdateProduct = async (req, res) => {
    const {cateID,name,price,costPrice,rating,countRating,status,inventory,img,storeID,groupid}=req.body;
    const newProduct={cateID,name,price,costPrice,rating,countRating,status,inventory,img,storeID,groupid};
    await product.findByIdAndUpdate(req.params.id,newProduct);
    res.json(product);
}
exports.DeleteProduct = async (req, res) => {
    await product.findByIdAndRemove(req.params.id);
    res.json("Deleted!!!");
}
exports.FindProductByID = async (req, res) => {
    await Product.findById(req.params.id).then(result=>{
        res.json(result);
    }).catch(err=>{
        res.json({
            status:'Product Finded111'
        })
    });
}