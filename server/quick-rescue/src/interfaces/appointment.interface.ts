import * as mongoose from 'mongoose'
export interface Appointment extends mongoose.Document{
    userfirstname:string,
    userlastname:string,
    useremail:string,
    doctorfirstname:string,
    doctorlastname:string,
    doctoremail:string,
    date:string
    time:string    
    description:string
}