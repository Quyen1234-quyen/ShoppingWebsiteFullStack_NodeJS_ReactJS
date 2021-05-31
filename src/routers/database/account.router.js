const express=require('express');
const router=express.Router();
const Account=require('../../models/account');
const auth=require('../../middleware/auth');

router.get('/',async(req,res)=>{
    const account=await Account.find();
    res.json(account);
});
router.post('/',async(req,res)=>{
    const {email,password,types,status}=req.body;
    const account=new Account({email,password,types,status});
    await account.save();
    res.json({status:'Account Added'});
});
router.put('/:id',(req,res)=>{
    const {email,password,types,status}=req.body;
    console.log(req.params.id);
    const newAccount=new Account({email,password,types,status});
    Account.findByIdAndUpdate(req.params.id,newAccount);
    res.json({
        status:'Account Updated'
    });
});

router.delete('/:id',(req,res)=>{
    Account.findByIdAndRemove(req.params.id);
    return res.json({
        status:'Account Deleted'
    });
});

router.get('/:id',async(req,res)=>{
    const account=await Account.findById(req.params.id);
    res.json(account);
});

module.exports=router;