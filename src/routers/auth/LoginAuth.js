const Account=require('../../models/account');
const Store=require('../../models/store');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

exports.LoginAuth= async (req,res)=>{
    var {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({'msg':'Vui Lòng Nhập Email Và Password'});
    }
    await Account.findOne({email}).then(account=>{
        if(!account)  res.json({'msg':'Tài Khoản Không Tồn Tại'});
        bcrypt.compare(password,account.password).then(isMatch=>{
            if(!isMatch)  res.json({'msg':'Thông Tin Không Hợp Lệ'});
            Store.findOne({accountID:account.id}).then(store=>{
                console.log("store",store)
                var payload={
                    id:store.id,
                    
                }
                var token =jwt.sign(payload,process.env.secretKey,{algorithm:'HS256',expiresIn:'1h'});
                res.json({
                    token,
                    payload,
                    msg:"oke"
                })
            })
            
        });
    });
}
