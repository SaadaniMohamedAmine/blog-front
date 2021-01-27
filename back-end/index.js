const express=require('express') ;
const port =process.env.PORT || 8000 ;
const connectDb=require("./config/dbConnection")
const app=express() ;

//database connection
connectDb() ;

//middleware
app.use(express.json()) ;

//routes
app.use('/user',require('./routes/user')) ;
app.use('/login',require('./routes/login'));
app.use('/post',require('./routes/post')) ;

app.listen(port,(err)=>{
    if(err) throw err ;
    console.log(`Server is running on port ${port}`)
})