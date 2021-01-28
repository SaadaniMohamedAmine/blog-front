const express=require('express') ;
const router=express.Router() ;
const User=require('../models/User') 
const {body,validationResult} =require('express-validator') ;
const bcrypt=require('bcryptjs') 
const jwt=require('jsonwebtoken') 
const authMiddleware=require('../config/authMiddleware')
require('dotenv').config() ;



//login action 
router.post('/',[
    body('email','Please enter a valid email !').isEmail().notEmpty(),
    body('password','Password should be not empty and at least more than 5 letters!').notEmpty().isLength({ min: 5 })
  ],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } ;
   User.find({email:req.body.email})
       .then(user=>{
           if(!user.length) {
               res.status(404).json({errors:[{msg:"Please register before !"}]})
           }
           bcrypt.compare(req.body.password,user[0].password,(err,isMatch)=>{
               if(err) {
                   throw err ;
               }
               if(!isMatch) {
                   
                   return res.json({errors:[{msg:"Wrong Password"}]})
               }
               else {
               let payload={
                   userId:user[0]._id
               } ;
               jwt.sign(payload,process.env.SECRET_KEY,(err,token)=>{
                   if(err) {
                       throw err
                   } 
                   res.send({token:token}) ;
      
               })
               }
           })
       })
       .catch(err=>console.error(err.message)) ;
})


router.get('/',authMiddleware,(req,res)=>{
   User.findById(req.userId).select("-password -__V")
        .then(user=>{
            if(!user) {
                return res.status(404).json({msg:"USer does not exist!"})
            }
            res.status(200).json(user) ;
        })
        .catch(err=>{
            console.log(err.message) ;
            res.status(500).json({msg:"Server error"})
        })
}) ;

module.exports=router ;