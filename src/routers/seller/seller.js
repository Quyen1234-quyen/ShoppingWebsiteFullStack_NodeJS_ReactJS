const Store = require('../../models/store');
const Account = require('../../models/account');
const Product = require('../../models/product');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const Main=require('./../main/main');
const smtpTransport=require('nodemailer-smtp-transport');
var nodemailer =  require('nodemailer');
// var AWS = require("aws-sdk");
// AWS.config.update({
//     region: "us-west-2",
//     endpoint: "http://s3-us-west-2.amazonaws.com"
// });
// AWS.config.accessKeyId = process.env.accessKeyId;
// AWS.config.secretAccessKey = process.env.secretAccessKey;
// var s3 = new AWS.S3();

var transporter =  nodemailer.createTransport(smtpTransport({
    service:'Gmail', // config mail server
    secure: false, // use SSL
    port: 25, // port for secure SMTP
    auth: {
        user: "nguyenxuananhtri2@gmail.com",
        pass: "anhtri12"
    },
    tls: {
        rejectUnauthorized: false
    }
}));



const dir = path.join(__dirname, "../../public/img");
//AddProduct-------------------------------------------------
exports.AddProduct =(req, res) => {
    var {
        image
    } = req.files;
    var {storeID} = req.body;
    var uploadFile=`${dir}/${storeID}`;
    if (!fs.existsSync(uploadFile)) {
        fs.mkdirSync(uploadFile);
    }
    var nameImageNew=NewImageName();
    var typeImage=TypeImage(image);
    image.mv(`${dir}/${storeID}/${nameImageNew}.${typeImage}`, err => {
        if (err) {
            return res.status(400).json({
                error:520
            });
        } else {
            var {name,cateID,price,costPrice,inventory} = req.body;
            var img=`../../../img/${storeID}/${nameImageNew}.${typeImage}`;
            var rating=5;
            var status=true;
            const product=new Product({cateID,name,price,costPrice,rating,status,inventory,img,storeID});
            product.save().then(product=>{
                res.json({
                    product
                })
            }).catch(err=>{
                res.status(400).json({
                    error:520
                });
            });
        }
    });
}

//RemoveProductById--------------------------------------
exports.RemoveProductById=async (req,res)=>{
    var {id}=req.params;
    await Product.findByIdAndRemove({_id:id}).then(product=>{
        var stringImage=product.img;
        var lengthImage=stringImage.length;
        var nameImage=stringImage.slice(stringImage.lastIndexOf('/')+1,lengthImage);
        fs.exists(`${dir}/${product.storeID}/${nameImage}`,(exists)=>{
            if(exists){
                fs.unlink(`${dir}/${product.storeID}/${nameImage}`,(err)=>{
                    if(err){
                        return res.status(400).json({
                            error:520
                        });
                    }else{
                        return res.json({
                            product
                        });
                    }
                });
            }else{
                return res.status(400).json({
                    error:520
                });
            }
        });    
    }).catch(err=>{
        res.status(400).json({
            error:520
        })
    })
}

//UpdateProductById-------------------------------------
exports.UpdateProductById= (req,res)=>{
    if(!req.files){
        var {name,cateID,price,costPrice,inventory,image,storeID} = req.body;
        var img=image;
        var rating=5,status=true;
        const newProduct={cateID,name,price,costPrice,rating,status,inventory,img,storeID};
        Product.findByIdAndUpdate(req.params.id,newProduct).then(product1=>{
            Product.findById(product1._id).then(product=>{
                res.json({
                    product
                })
            }).catch(err=>{
                res.status(400).json({
                    error:520
                })
            })
            
        }).catch(err=>{
            res.status(400).json({
                error:520
            })
        });
    }
    if(req.files){
        var {
            image
        } = req.files;
        var {storeID} = req.body;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        var nameImageNew=NewImageName();
        var typeImage=TypeImage(image);
        image.mv(`${dir}/${storeID}/${nameImageNew}.${typeImage}`, err => {
            if (err) {
                return res.status(400).json({
                    error: 400
                });
            } else {
                var {name,cateID,price,costPrice,inventory} = req.body;
                var img=`../../../img/${storeID}/${nameImageNew}.${typeImage}`;
                var rating=5;
                var status=true;
                const newProduct={cateID,name,price,costPrice,rating,status,inventory,img,storeID};
                Product.findByIdAndUpdate(req.params.id,newProduct).then(product1=>{
                    var stringImage=product1.img;
                    var lengthImage=stringImage.length;
                    var nameImage=stringImage.slice(stringImage.lastIndexOf('/')+1,lengthImage);
                    fs.exists(`${dir}/${product1.storeID}/${nameImage}`,(exists)=>{
                        if(exists){
                            fs.unlink(`${dir}/${product1.storeID}/${nameImage}`,(err)=>{
                                if(err){
                                    return res.status(400).json({
                                        error:520
                                    });
                                }else{
                                    Product.findById(product1._id).then(product=>{
                                        res.json({
                                            product
                                        })
                                    }).catch(err=>{
                                        return res.status(400).json({
                                            error: 400
                                        });
                                    })
                                }
                            });
                        }else{
                            return res.status(400).json({
                                error:520
                            });
                        }
                    });   
                }).catch(err=>{
                    return res.status(400).json({
                        error: 400
                    });
                });
            }
        });
    }
}
//SendMailRegister------------------------------------
exports.SendMailRegister=async(req,res)=>{
    
    var {email}=req.body;
    var account =await Account.findOne({email});
    if(account){
        return res.json({
            error: 520,
            msg:'email da ton tai'
        });
    }else{
        var random=Math.floor(Math.random() * 1000000);
        var random=random+"";
        if(random.length<6){
            for(var i=0;i<6-random.length;i++){
                random+="0";
            }
        }
        console.log("random",random);
        var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
            from: 'KOS',
            to: email,
            subject: 'LazadaFake',
            text: 'Email xác nhận',
            html: `<p>Email của bạn vừa được dùng để đăng kí LazadaFake ${email} </b><ul><li> Mã xác nhận xác nhận:<span style="font-size:40px;color:red">${random}</span></li></ul>`
        }
        transporter.sendMail(mainOptions, function(err, info){
            if(err){
                res.json({
                    error:520,
                    msg:"email khong ton tai"
                })
            }else{
                res.json(random);
            }
        });
    }
    
}
//RegisterSeller---------------------------------------
exports.RegisterSeller =(req, res) => {
    var {
        email,
        password,
        nameStore,
        businessStoreType,
        addressStore
    } = req.body;
    console.log("vao dang ki ngay");
    console.log(email,password,nameStore,businessStoreType,addressStore);
    
    var types = "3";
    var status = true;
    const newAccount = new Account({
        email,
        password,
        types,
        status
    });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAccount.password, salt, (err, hash) => {
            if (err) throw err;
            newAccount.password = hash;
            newAccount.save().then(account => {
                var accountID = account.id;
                const newStore = new Store({
                    nameStore,
                    accountID,
                    status,
                    businessStoreType,
                    addressStore
                });
                newStore.save().then(store => {
                    res.json({
                        store: {
                            id: store.id,
                            name: store.nameStore,
                            idAcc: store.accountID
                        }
                    })
                }).catch(err=>{
                    res.json({
                        error:520
                    })
                })
            });
        });
    })
}

// find product by id store---------------------------------------
exports.FindProductByIdStore = async (req, res) => {
    var {
        id
    } = req.params;

    await Product.find({
        storeID: id
    }).then(product => {
        Store.find({
            _id: id
        }).then(store => {
            res.json({
                idStore:id,
                nameStore: store[0].nameStore,
                product
            })
        })
    })
}



// CreateNameImageNew

function NewImageName(){
    var nowDate=new Date();
    var year=nowDate.getFullYear(),month=nowDate.getMonth()+1,date=nowDate.getDate();
    var hours=nowDate.getHours(),minute=nowDate.getMinutes(),second=nowDate.getSeconds(),miniSecond=nowDate.getMilliseconds();
    var nameImageNew=year+"_"+month+"_"+date+"_"+hours+"_"+minute+"_"+second+"_"+miniSecond;
    return nameImageNew;
}
function TypeImage(image){
    var nameImage=image.name;
    var lengthImage=nameImage.length;
    var typeImage=nameImage.slice(lengthImage-3,lengthImage);
    return typeImage;
}