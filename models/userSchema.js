const mongoose = require("mongoose");
const { boolean } = require("yup");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true,
        
},
isAdmin:{
    type:Boolean,
    default:false
},

   
});

const User = mongoose.model("users", userSchema);
module.exports=User;