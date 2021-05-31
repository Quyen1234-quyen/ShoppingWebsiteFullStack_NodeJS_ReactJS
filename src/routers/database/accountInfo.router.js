const express=require('express');
const router=express.Router();
const AccountInfo=require('../../models/accountInfo');
router.get('/',async (req,res)=>{
    const accountInfo= await AccountInfo.find();
    res.json(accountInfo);
});

router.post('/',async(req,res)=>{
    const {accountID,fullname,email,phone,address,birthDay}=req.body;
    console.log(birthDay);
    console.log(Date());
    const birthday1= Date(birthDay);
    // yyyy-mm-dd
    const accountInfo= new AccountInfo({accountID,fullname,email,phone,address,birthday1});
    await accountInfo.save();
    res.json({status:'AccoutnInfo Added'});
});
router.put('/:id',(req,res)=>{
    const {accountID,fullname,email,phone,address,birthDay}=req.body;
    const birthday1= Date(birthDay);
    const newAccountInfo= {accountID,fullname,email,phone,address,birthday1};
    AccountInfo.findByIdAndUpdate(req.params.id,newAccountInfo).then(result=>{
        res.send("ngon");
    }).catch(err=>{
        res.send("loi");
    }); 
});
router.delete('/:id',async(req,res)=>{
    await AccountInfo.findByIdAndRemove(req.params.id).then(result=>{
        res.send("ngon")
    }).catch(err=>{
        res.send("loi")
    });
});
router.get('/:id',async (req,res)=>{
    const accountinfo=await AccountInfo.findById(req.params.id);
    res.json(accountinfo);
});
module.exports=router;