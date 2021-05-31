const express=require('express');const router=express.Router();

const Store=require('../../models/store');


router.get('/',async(req,res)=>{
    const store=await Store.find();
    res.json(store);
});
router.get('/store',async(req,res)=>{
    
});
router.post('/', async(req,res)=>{
    const {nameStore,accountID,businessType,addressStore,status}=req.body;
    console.log(nameStore,'i',accountID);
    const store=new Store({nameStore,accountID,businessType,addressStore,status});
    await store.save().then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    })
});

router.put('/:id',async(req,res)=>{
    const {nameStore,accountID,businessType,addressStore,status}=req.body;
    const store={
        nameStore,
        accountID
    }
    await Store.findByIdAndUpdate(req.params.id,store).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    })
});


router.delete('/:id',async(req,res)=>{
    await Store.findByIdAndRemove(req.params.id).then(result=>{
        res.send('ngon');
    }).catch(err=>{
        res.send("loi");
    })
});

router.get('/:id',async(req,res)=>{
    const store=await Store.findById(req.params.id);
    res.json(store);
});

module.exports=router;