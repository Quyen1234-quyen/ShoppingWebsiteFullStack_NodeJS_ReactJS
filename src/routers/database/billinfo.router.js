const express=require('express');const router=express.Router();
const BillInfo=require('../../models/billInfo');

router.get('/',async(req,res)=>{
    const billInfo=await BillInfo.find();
    res.json(billInfo);
})


router.post('/',async(req,res)=>{
    const {billID,productID,quantity,price}=req.body;
    const billInfo=new BillInfo({billID,productID,quantity,price});
    await billInfo.save().then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    })
});
router.put('/:id',async(req,res)=>{
    const {billID,productID,quantity,price}=req.body;
    const billInfo={billID,productID,quantity,price};
    await BillInfo.findByIdAndUpdate(req.params.id,billInfo).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    });

});

router.delete('/:id',async(req,res)=>{
    await BillInfo.findByIdAndRemove(req.params.id).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    });
})
module.exports=router;