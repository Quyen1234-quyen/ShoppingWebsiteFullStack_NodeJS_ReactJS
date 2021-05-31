const express=require('express');
const router=express.Router();
const Bill=require('../../models/bill');

router.get("/",async(req,res)=>{
    const bill= await Bill.find();
    res.json(bill);
});
router.post('/', async(req,res)=>{
    const {NotiID,status,date,quantity,total}=req.body;
    const bill=new Bill({NotiID,status,date,quantity,total});
    await bill.save().then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    })
});
router.put('/:id',async(req,res)=>{
    const {NotiID,status,date,quantity,total}=req.body;
    const bill={NotiID,status,date,quantity,total};
    await Bill.findByIdAndUpdate(req.params.id,bill).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    })

})
router.delete("/:id",async(req,res)=>{
    await Bill.findByIdAndRemove(req.params.id).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    });
});
module.exports=router;