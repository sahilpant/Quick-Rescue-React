import * as mongoose from "mongoose";

export const Appointment = new mongoose.Schema({
    userfirstname:{type:String,required:true},
    userlastname:{type:String,required:true},
    useremail:{type:String,required:true},
    doctorfirstname:{type:String,required:true},
    doctorlastname:{type:String,required:true},
    doctoremail:{type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
    description:{type:String,required:true}
})