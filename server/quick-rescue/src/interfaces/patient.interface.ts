import * as mongoose from 'mongoose'
export interface User extends mongoose.Document{
    firstname:string,
    lastname:string,
    emailaddress:string,
    password:string,
}