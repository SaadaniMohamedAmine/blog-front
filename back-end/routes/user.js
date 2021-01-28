const express=require('express') ;
const router=express.Router() ;
const User=require('../models/User') ;
const {body,validationResult} =require('express-validator') ;
const bcrypt = require('bcryptjs') ;
const jwt=require('jsonwebtoken') ;
require('dotenv').config() ;

//register a new user
router.post('/',
        [//use the express-validator to validate the props of schema user
    body('firstName','First name must contain only letters !').isAlpha(),
    body('lastName','Last name must contain only letters !').isAlpha() ,
    body("phone","Phone must contain only numbers").isNumeric() ,
    body('email','Please enter a valid email !').isEmail(),
    body('password','Password must be at least 5 letters').isLength({ min: 5 }),
    body("age","Age must contain only numbers").isNumeric() ,
    ]
,(req,res)=>{
    //new user in request body
    let newUser=new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password,
        age:req.body.age
    }) ;
    
   
    //handle the error if one of validators has an error result !! 
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
           return res.status(400).json({ errors: errors.array() });
       } ;

     //check if the user exists 
     User.find({email:newUser.email})
         .then(user=>{
             if(user.length!==0) {
                 res.status(400).send([{msg:"User already exists !"}])
             }
             else {
                 //becrypting the newUser password
                 bcrypt.genSalt(10,(err,salt)=>{
                     if(err) {
                        throw err 
                     }
                     bcrypt.hash(newUser.password,salt,(err2,hashedPwd)=>{
                         if(err2) {throw err2} ;
                         newUser.password=hashedPwd ;
                          newUser.save() ;
                         let payload={
                             userId:newUser._id
                         };
                         jwt.sign(payload,process.env.SECRET_KEY,(err,token)=>{
                             if(err) throw err ;
                             res.send({token:token}) ;
                         })
 
                     })
                 })
             }
         })  

})

//get all users 
router.get('/',(req,res)=>{
   User.find().populate("posts")
        .then(users=>res.json(users))
        .catch(err=>console.error(err.message))
})

//get one user posts
router.get('/posts/:userId',(req,res)=>{
   User.findById(req.params.userId).populate("posts")
       .then(user=>res.json(user.posts)) 
       .catch(err=>console.error(err.message)) 
})

module.exports=router ;