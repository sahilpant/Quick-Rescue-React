import * as mongoose from 'mongoose'
export interface Doctor extends mongoose.Document{
    firstname:string,
    lastname:string,
    speciality:string
    email:string,
    password:string,
}