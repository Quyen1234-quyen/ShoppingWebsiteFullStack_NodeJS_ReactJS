const express = require('express');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session=require('express-session');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const jwt=require('jsonwebtoken');
const crypto=require('crypto');
require('dotenv').config()

const app = express();
const mongoose = require('./database/connectDB');
const MainRoutes=require('./routers/main/main');
const UserRoutes = require('./routers/user/user');
const SellerRoutes = require('./routers/seller/seller');
const AuthRouters = require('./routers/auth/LoginAuth');
const ProductRouters = require('./routers/product');
const Account = require('./models/account');
const Store=require('./models/store');
const auth = require('./middleware/auth');
require('./middleware/passport')(passport);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(fileUpload());
app.use(session({
    secret:process.env.secretKey,
    cookie:{
        maxAge:1000*60*5
    },
    saveUninitialized:true,
    resave:true
}));



app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));


app.set('port', process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
//main
app.get('/FetchAllCategoryByIdGroupCategory/:id',MainRoutes.FetchAllCategoryByIdGroupCategory);
app.get('/FetchAllGroupCategory',MainRoutes.FetchAllGroupCategory);
app.get('/FindGroupCategoryById/:id',MainRoutes.FindGroupCategoryById);
app.get('/FetchAllCategory',MainRoutes.FetchAllCategory);
app.get('/FindCategoryById/:id',MainRoutes.FindCategoryById);
app.get('/FetchAllStore', MainRoutes.getAllStore);
app.get('/FetchAllProduct',MainRoutes.FetchAllProduct);
app.post('/RegisterSeller',SellerRoutes.RegisterSeller);
app.post('/LoginAuth', passport.authenticate('local'),(req,res)=>{
    const user=req.user;
    var payload={
        idUser:user.idUser,
        idStore:user.idStore,
        types:user.types,
    }
    var authenKey=crypto.createHash('md5').update(user.idUser+user.passUser).digest("hex");
    console.log("authen",authenKey);
    var token =jwt.sign(payload,process.env.secretKey,{algorithm:'HS256',expiresIn:'1h'});
    res.json({
        token,
        authenKey,
        payload
    })
});
app.get('/Logout', function(req, res){
    req.logout();
    res.json({
        msg:"oke"
    })
  });



app.get('/sellercenter/:id/:token',async(req,res)=>{
    await Store.findById(req.params.id).then(store=>{
        Account.findById(store.accountID).then(account=>{
            var getKey = crypto.createHash('md5').update(account._id+account.password).digest('hex');
            if(account && getKey === req.params.token){
                if(req.isAuthenticated()){
                    res.sendFile(path.join(__dirname, 'public/') + "index.html");
                }
                else{
                    res.redirect('/');
                }
            }else{
                return  res.redirect('/');
            }
        }).catch(err=>{
            res.redirect('/');
        })
    }).catch(err=>{
        res.redirect('/');
    })
    
    
});
app.get('/FindProductByIdStore/:id',SellerRoutes.FindProductByIdStore);
//window.location.href = '/admin'
app.use((req,res,next)=>{

    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLowerCase()==='bearer'){
        var token=req.headers.authorization.split(' ')[1];
        jwt.verify(token,process.env.secretKey,(err,decode)=>{
            if(err){
                res.redirect('https://www.facebook.com/ ');
            }else{
                res.redirect('https://www.facebook.com/');
            }
        });
    }else{
        res.redirect('https://www.facebook.com/');
    }
});
//seller
app.post('/SendMailRegister',SellerRoutes.SendMailRegister);
app.get('/deleteproductbyid/:id',auth,SellerRoutes.RemoveProductById);
app.put('/updateproductbyid/:id',auth,SellerRoutes.UpdateProductById);
app.post('/addproduct', SellerRoutes.AddProduct);






app.get('/findProductById/:id', ProductRouters.FindProductByID);



app.use('/account',require('./routers/database/account.router'));
app.use('/store',require('./routers/database/store.router'));
app.use('/products', require('./routers/database/product.router'));
app.use('/accountinfo',require('./routers/database/accountInfo.router'));
app.use('/groupCate', require('./routers/database/groupCate.router'));
app.use("/category",require('./routers/database/category.router'));
app.use('/bill',require("./routers/database/bill.router"));
app.use('/billinfo',require('./routers/database/billinfo.router'));
app.use('/dailyReceiveMoney',require('./routers/database/dailyReceiveMoney.router'));
app.use('/monthlyReceiveMoney',require('./routers/database/monthlyReceiveMoney.router'));



app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/') + "index.html");
})


//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});