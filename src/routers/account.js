var account=require('./../../models/account');
var accountInfo=require('./../../models/accountInfo');
var nodemailer =  require('nodemailer');
exports.RegisterAccount=async(req,res)=>{
    
}
exports.AddAccount = async (req, res) => {
    const {email,password,types}=req.body;
    const status = false;
    const acc=new account({email,password,types,status});
    var idAccount = '';
    await acc.save().then(result => {
        idAccount = result.id;
    });
    //add info
    const accountID = idAccount;
    const {fullname,phone,address,birthDay}=req.body;
    const accInfo= new accountInfo({accountID,fullname,phone,address,birthDay});
    await accInfo.save();
    //send mail
    var transporter =  nodemailer.createTransport({ // config mail server
        service: 'Gmail',
        auth: {
            user: 'dizzmemayconcho@gmail.com',
            pass: 'concho12'
        }
    });
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'KOS',
        to: email,
        subject: 'LZDFake',
        text: 'Email xác nhận',
        html: '<p>Email của bạn vừa được dùng để đăng kí LZDFake</b><ul><li>Vui lòng chọn link bên dưới để xác nhận: </li><li>http://xacnhanemail.com</li><li>Hãy chắc chắn rằng bạn là người đăng kí</li></ul>'
    }
    transporter.sendMail(mainOptions, function(err, info){
        /*if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            res.send('done');
        }*/
    });
    res.json({status:'Accout Added'});
}
exports.DeleteAccount = async (req, res) => {
    var id = req.params.id;
    var accountInfoID = "";
    await accountInfo.findOne({ accountID : id }, function (err, docs) {
        accountInfoID = docs.id;
    });
    await account.findByIdAndRemove(req.params.id);
    await accountInfo.findByIdAndRemove(accountInfoID); 
    res.json({status:'Accout Delete'});
}
exports.UpdateAccount = async (req, res) => {
    const {email,password,types}=req.body;
    const newAccount= {email,password,types};
    await account.findByIdAndUpdate(req.params.id, newAccount).then(result=>{
        console.log("OK");
    }).catch(err=>{
        console.log('--------------------acc err--------------------------');
        console.log(err);
    });
    var accountInfoID = "";
    await accountInfo.findOne({ accountID : req.params.id }, function (err, docs) {
        accountInfoID = docs.id;
    });
    //update info
    const {fullname,phone,address,birthDay}=req.body;
    const accountID = req.params.id;
    const newAccountInfo= {accountID,fullname,phone,address,birthDay};
    await accountInfo.findByIdAndUpdate(accountInfoID, newAccountInfo).then(result=>{
        console.log("OK");
    }).catch(err=>{
        console.log('--------------------info err--------------------------');
        console.log(err);
    });
    res.json({
        status:'Account Updated'
    });
}
exports.UnlockAccount = async (req, res) => {
    var id = req.params.id;
    await account.findByIdAndUpdate(id, {status : true}).then(result=>{
        console.log("OK");
    }).catch(err=>{
        console.log('--------------------acc err--------------------------');
        console.log(err);
    });
}
exports.LockAccount = async (req, res) => {
    var id = req.params.id;
    await account.findByIdAndUpdate(id, {status : false}).then(result=>{
        console.log("OK");
    }).catch(err=>{
        console.log('--------------------acc err--------------------------');
        console.log(err);
    });
}