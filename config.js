const mongoose=require("mongoose")

const connect = mongoose.connect("mongodb://127.0.0.1:27017/LoginFormPractice")

//check database connected or not

connect.then(()=>{
    console.log("Database connected successfully");
})
.catch((e)=>{
    console.log("Database cannot be connected");
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection=new mongoose.model("users",logInSchema)

module.exports=collection;