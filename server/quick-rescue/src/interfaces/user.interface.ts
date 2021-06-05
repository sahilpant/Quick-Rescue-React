import * as mongoose from 'mongoose'
export interface User extends mongoose.Document{
    firstname:string,
    lastname:string,
    email:string,
    password:string,
}