import * as mongoose from 'mongoose'
export interface Appointment extends mongoose.Document{
    patientfirstname:string,
    patientlastname:string,
    patientemailaddress:string,
    doctorfirstname:string,
    doctorlastname:string,
    doctoremailaddress:string,
    time:string    
    description:string
}