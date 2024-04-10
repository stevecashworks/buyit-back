import mongoose from "mongoose";

const userModel=mongoose.Schema({
    userName:{
       type: String,
       unique:true
    },
    email: String,
    password:String,
    userType:{
        type:String,
        enum:["customer","admin", "vendor"],
        default:"customer"
    },
    img:String,
    description:String
    
        
    

})
export default mongoose.model("users",userModel)