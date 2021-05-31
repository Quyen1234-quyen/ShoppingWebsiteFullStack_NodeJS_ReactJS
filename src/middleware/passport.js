const LocalStrategy = require('passport-local').Strategy;
const Account=require('../models/account');
const Store=require('../models/store');
const bcrypt=require('bcryptjs');

module.exports=function(passport){
    passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'password',
        passReqToCallback: true
        },(req,email,password,done)=>{
            Account.findOne({email}).then(account=>{
                if(!account){
                     return done(null,false);
                }else{
                    bcrypt.compare(password,account.password).then(isMatch=>{
                        if(!isMatch){
                            return done(null,false);
                        }else{
                            
                            Store.findOne({accountID:account._id}).then(store=>{    
                                var payload={
                                    passUser:account.password,
                                    idUser:account._id,
                                    idStore:store.id,
                                    types:account.types
                                }
                                return done(null,payload);
                            })
                            
                        }
                    })
                }
            });
        }    
    ));
    passport.serializeUser((account,done)=>{
        return done(null,account)
    })
    
    passport.deserializeUser((account,done)=>{
        return done(null,account);
    });
}