import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DoctorSignIn, DoctorSignUP } from 'src/Dtos/doctor.signup.dto';
import { Appointment } from 'src/interfaces/appointment.interface';
import { Doctor } from 'src/interfaces/doctor.interface';

@Injectable()
export class DoctorService {
    constructor(
        @InjectModel('Doctor') private readonly Doctor:Model<Doctor>,
        @InjectModel('Appointment') private readonly Appointment:Model<Appointment>,
    ) {}
    
    async getAllDoctors():Promise<Doctor[]>{
        const doctor = this.Doctor.find();
        return doctor;
    }
    
    async signUpDoctor(doctorData:DoctorSignUP):Promise<any> {
        const doctor = new this.Doctor({
            firstname:doctorData.firstname,
            lastname:doctorData.lastname,
            speciality:doctorData.speciality,
            email:doctorData.email,
            password:doctorData.password
        })
        const exist = await this.Doctor.findOne({email: doctorData.email});
        if(exist) {
            console.log("exist")
            return {
                result:false,
                message:"exist"
            };
        }
        else {
            await doctor.save();
            return {
                result:true,
                message:"signUp successfull"
            };
        }
    }

    async signInDoctor(signInData:DoctorSignIn):Promise<any>{
        const {email,password} = signInData;
        const doctor = await this.Doctor.findOne({email:email});
        if(doctor){
            if(doctor.password == password){
                return {
                    result:true,
                    message:"successfull login",
                    data:doctor
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
    async getAppointments(email:string):Promise<any> {
        const appointments = await this.Appointment.find({doctoremail:email});
        return appointments;
    }

}
