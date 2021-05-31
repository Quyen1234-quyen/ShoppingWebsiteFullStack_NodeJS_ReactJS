var groupcategory=require('./../../models/groupCatelogy');

exports.FindSellerByID = async (req, res) => {
    const {email,password,types,status}=req.body;
    const account=new Account({email,password,types,status});
    await account.save();
    res.json({status:'Account Added'});
}