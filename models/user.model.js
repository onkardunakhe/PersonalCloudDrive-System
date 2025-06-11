const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
         Username:{
            type:String,
            required:true,
            trim:true,
            Unique:true,
            minlength:[3,'Username Should be at least 3 chararcters']
         },
         Email:{
            type:String,
            required:true,
            trim:true,
            Unique:true,
            lowercase :true,
            minlength:[13,'Email Should be at least 13 chararcters']
         },
         Password:{
            type:String,
            required:true,
            trim:true,
            minlength:[5,'Password Should be at least 5 chararcters']
         }

})

const User=mongoose.model('user',UserSchema)
module.exports=User;