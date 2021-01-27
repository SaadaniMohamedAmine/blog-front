const mongoose=require('mongoose') ;
const postSchema=new mongoose.Schema({
    title:String ,
    body:String ,
    writer :{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"user"
    } ,
    date :{
        type:String ,
        default:Date.now()
    }
})
module.exports=mongoose.model('post',postSchema) ;