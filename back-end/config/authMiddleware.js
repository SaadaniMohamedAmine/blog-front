
const jwt =require('jsonwebtoken') ;  
require('dotenv').config()
const authMiddleWare=(req,res,next)=>{
    //check if there is a token and if it exists,it will be stored in
    //variable named token
    let token =req.header('auth-token') ;
    //check if teh variable token is true or false(contain token or not)
    if(!token)   {
        return res.status(401).json({msg:"You are not authorized !"})
    }
    //verify the existence of the token 
   jwt.verify(token,process.env.SECRET_KEY,(err,payload)=>{
       if(err) {
           throw err
       }
       req.userId=payload.userId ;
       
   }) ;
   next() ;
}
module.exports=authMiddleWare ;