const express=require('express');const router=express.Router();
const GroupCate=require('../../models/groupCategory');


router.get('/',async(req,res)=>{
    const groupCate= await GroupCate.find();
    res.json(groupCate);
});

router.post('/',async(req,res)=>{
    const {name,content}=req.body;
    console.log(name,content);
    const groupCate=new GroupCate({name,content});
    await groupCate.save().then(result=>{
        res.json({
            result
        })
    }).catch(err=>{
        res.send("loi");
    })
});

router.put('/:id',async(req,res)=>{
    const {name,content}=req.body;
    const newGroupCate={name,content};
    await GroupCate.findByIdAndUpdate(req.params.id,newGroupCate).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    })
});
router.delete('/:id',async(req,res)=>{
    console.log(req.params.id);
    await GroupCate.findByIdAndRemove(req.params.id).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    })
});

router.get('/:id',async(req,res)=>{
    const groupCate=await GroupCate.findById(req.params.id);
    res.json(groupCate);
});
module.exports=router;