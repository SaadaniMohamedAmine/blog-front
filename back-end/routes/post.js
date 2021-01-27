const express=require('express') ;
const router=express.Router() ;
const Post=require('../models/Post') ;
const User=require('../models/User') ;

router.post('/:userId',(req,res)=>{
   let newPost=new Post({
       title:req.body.title ,
       body:req.body.body
   }) ;
   User.findById(req.params.userId)
      .then(user=>{
          user.posts.push(newPost) ;
          newPost.writer=user ;
          newPost.save()
          user.save()
            .then(()=>res.json({msg:"Post added successfully !"}))
            .catch(err=>console.error(err.message)) ;
      })
      .catch(err=>console.error(err.message)) ;
})

//get all posts 
router.get('/',(req,res)=>{
    Post.find().populate("writer") 
        .then(posts=>res.json(posts))
        .catch(err=>console.error(err.message))
       
})


module.exports=router ;
