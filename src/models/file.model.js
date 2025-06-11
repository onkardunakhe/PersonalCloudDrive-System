const mongoose = require('mongoose');
const FileSchema= new mongoose.Schema({
    path:{
        type:String,
        required:[true,'Please enter the path of the file']
    },
    originalname:{
        type:String,
        required:[true,'Please enter the original name of the file']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'Please enter the user']
    }
})

module.exports=mongoose.model('file',FileSchema)