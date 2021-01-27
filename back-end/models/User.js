const mongoose=require("mongoose") ;
const userSchema=new mongoose.Schema({
    firstName:String ,
    lastName:String ,
    email:String ,
    phone:Number ,
    age:Number ,
    password:String,
    color:{
        type:String ,
        default: "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"post"
    }] ,
    date :{
        type:Date ,
        default:Date.now()
    }
})

module.exports=mongoose.model("user",userSchema) ;