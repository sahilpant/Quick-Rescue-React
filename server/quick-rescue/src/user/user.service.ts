import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppointmentDto } from 'src/Dtos/appointment.dto';
import { UserSignIn, UserSignUp } from 'src/Dtos/User.signup.dto';
import { Appointment } from 'src/interfaces/appointment.interface';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly User:Model<User>,
        @InjectModel('Appointment') private readonly Appointment:Model<Appointment>
    ) {}


    async getAllUsers():Promise<User[]>{
        const user = this.User.find();
        return user;
    }

    async signUpUser(userData:UserSignUp):Promise<any> {
        const user = new this.User({
            firstname:userData.firstname,
            lastname:userData.lastname,
            email:userData.email,
            password:userData.password
        })
        const exist = await this.User.findOne({email: userData.email});
        if(exist) {
            console.log("exist")
            return {
                result:false,
                message:"Accont already exist"
            }
        }
        else {
            await user.save();
            return {
                result:true,
                message:"signUp successfull"
            }
        }
    }

    async signInUser(signInData:UserSignIn):Promise<any>{
        const {email,password} = signInData;
        const user = await this.User.findOne({email:email});
        if(user){
            if(user.password == password){
                return {
                    result:true,
                    message:"successfull login"
                }
            }
            else{
                return {
                    result:false,
                    message:"wrong password"
                }
            }
        }
        else{
            return {
                result:false,
                message:"email doesnot exist"
            }
        }
    }

    async bookAppointMent(appointmentData:AppointmentDto):Promise<any> {
        const appointment = new this.Appointment({
            userfirstname:appointmentData.userfirstname,

            userlastname:appointmentData.userlastname,
        
            useremail:appointmentData.useremail,
            
            doctorfirstname:appointmentData.doctorfirstname,
            
            doctorlastname:appointmentData.doctorlastname,
            
            doctoremail:appointmentData.doctoremail,

            date:appointmentData.date,
            
            time:appointmentData.time,
            
            description:appointmentData.description
        })
        try{
            await appointment.save();
            return {
                result:true,
                message:"appointment booked"
            }
        }catch(e){
            console.log(e);
            return {
                result:false,
                message:"appointment not booked"
            }
        }
    }

    async getAppointments(email:string):Promise<any> {
        const appointments = await this.Appointment.find({useremail:email});
        return appointments;
    }
}
