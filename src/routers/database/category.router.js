const express=require('express');const router=express.Router();
const Category= require('../../models/category');
router.get('/',async(req,res)=>{
    const category=await Category.find();
    res.json(category);
});

router.post('/',async(req,res)=>{
    const {groupCateID,content,name}=req.body;
    console.log(groupCateID,content,name);
    const category=new Category({groupCateID,content,name});
    await category.save().then(result=>{
        res.json({
            result
        })
    }).catch(err=>{
        res.send("loi");
    })
});


router.put('/:id',async(req,res)=>{
    const {groupCateID,content,name}=req.body;
    const category={groupCateID,content,name};
    await Category.findByIdAndUpdate(req.params.id,category).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    })
});

router.delete('/:id', async(req,res)=>{
    await Category.findByIdAndRemove(req.params.id).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    });
    
});
module.exports=router;