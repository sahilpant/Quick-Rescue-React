import * as mongoose from "mongoose";

export const Appoitment = new mongoose.Schema({
    patientfirstname:{type:String,required:true},
    patientlastname:{type:String,required:true},
    patientemailaddress:{type:String,required:true},
    doctorfirstname:{type:String,required:true},
    doctorlastname:{type:String,required:true},
    doctoremailaddress:{type:String,required:true},
    time:{type:Date,required:true},
    description:{type:String,required:true}
})