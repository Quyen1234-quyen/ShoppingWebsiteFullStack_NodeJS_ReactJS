const GroupCate=require('./../../models/groupCategory');
const Category=require('./../../models/category');
const Store =require('../../models/store');
const Product=require('../../models/product');
const Account=require('./../../models/account');

//
exports.getAllStore=async (req,res)=>{
    const store=await Store.find();
    res.json(store);
}


//FindCategoryByIdGroupCategory

exports.FetchAllCategoryByIdGroupCategory=async(req,res)=>{
    await Category.find({groupCateID:req.params.id}).then(result=>{
        res.json(result);
    }).catch(err=>{
        res.status(400).json({
            error:520
        });
    })
}

//FetchAllGroupCategory
exports.FetchAllGroupCategory=async(req,res)=>{
    const groupCate= await GroupCate.find();
    res.json(groupCate);
   
}
//FindGroupCategoryById
exports.FindGroupCategoryById=async(req,res)=>{
    const groupCate=await GroupCate.findById(req.params.id);
    if(groupCate){
        res.json({
            groupCate
        });
    }else{
        res.status(400).json({
            error:520
        });
    }
    
}

//FetchAllCategory
exports.FetchAllCategory=async(req,res)=>{
    const category=await Category.find();
    if(category){           
        res.json(category);
    }else{
        res.status(400).json({
            error:520
        })
    }
}

//FindCategoryById
exports.FindCategoryById=async(req,res)=>{
    const category=await Category.findById(req.params.id);
    res.json({
        category
    });
}
//FetchAllProduct
exports.FetchAllProduct=async(req,res)=>{
    const product=await Product.find();
    res.json(product);
}
//FetchProductById
exports.FetchProductById=async(req,res)=>{
    await Product.findById(req.params.id).then(product=>{
        res.json(product);
    }).catch(err=>{
        res.status(400).json({
            error:520
        })
    });
}
//FindAccountByEmail
exports.FindAccountByEmail=async(email)=>{
    await Account.findOne({email}).then(account=>{
        return true;
    }).catch(err=>{
        return false;
    })
}
//FindUserById

exports.FindUserById=async(id)=>{
    var account=await Account.findById(id);
    if(account){
        return account;
    }else{
        return false;
    }
}