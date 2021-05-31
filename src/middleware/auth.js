const jwt=require('jsonwebtoken');

let auth=(req,res,next)=>{
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLowerCase()==='bearer'){
        var token=req.headers.authorization.split(' ')[1];
        jwt.verify(token,process.env.secretKey,(err,decode)=>{
            if(err){
                return res.status(403).send({
                    mess:"Token invalid"
                })
            }else{
                return res.status(403).send({
                    mess:"Token invalid"
                })
            }
        });
    }else{
        return res.status(403).send({
            mess:"Unauthorized"
        })
    }
}

module.exports = auth;