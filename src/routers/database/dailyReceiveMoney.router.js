const express=require('express');const router=express.Router();
const DailyReceiveMoney=require('../../models/dailyReceiveMoney');

router.get('/',async(req,res)=>{
    const dailyReceiveMoney=await DailyReceiveMoney.find();
    res.json(dailyReceiveMoney);
});

router.post('/',async(req,res)=>{
    const {storeID,totalToday,date}=req.body;
    const dailyReceiveMoney=new DailyReceiveMoney( {storeID,totalToday,date});
    await dailyReceiveMoney.save().then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    })
})

router.put('/:id',async(req,res)=>{
    const {storeID,totalToday,date}=req.body;
    const dailyReceiveMoney= {storeID,totalToday,date};
    await DailyReceiveMoney.findByIdAndUpdate(req.params.id,dailyReceiveMoney).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    });
});

router.delete('/:id',async(req,res)=>{
    await DailyReceiveMoney.findByIdAndRemove(req.params.id).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    });

});

module.exports=router;