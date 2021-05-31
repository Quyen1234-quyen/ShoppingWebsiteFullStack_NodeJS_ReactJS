const express=require('express');const router=express.Router();
const MonthlyReceiveMoney= require('../../models/monthReceiveMoney');

router.get('/',async(req,res)=>{
    const monthlyReceiveMoney= await MonthlyReceiveMoney.find();
    res.json(monthlyReceiveMoney);
});

router.post('/',async(req,res)=>{
    const {storeID,totalToday,month}=req.body;
    const monthlyReceiveMoney=new MonthlyReceiveMoney({storeID,totalToday,month});
    await monthlyReceiveMoney.save().then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    })
});

router.put('/:id',async(req,res)=>{
    const {storeID,totalToday,month}=req.body;
    const monthlyReceiveMoney={storeID,totalToday,month};
    await MonthlyReceiveMoney.findByIdAndUpdate(req.params.id,monthlyReceiveMoney).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    });

});

router.delete('/:id',async(req,res)=>{
    await MonthlyReceiveMoney.findByIdAndRemove(req.params.id).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    });
    
})

module.exports=router;