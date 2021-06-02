import * as mongoose from "mongoose";

export const User = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    emailaddress:{type:String,required:true},
    password:{type:String,required:true},
})