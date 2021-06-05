import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DoctorSignIn, DoctorSignUP } from 'src/Dtos/doctor.signup.dto';
import { Doctor } from 'src/interfaces/doctor.interface';

@Injectable()
export class DoctorService {
    constructor(
        @InjectModel('Doctor') private readonly Doctor:Model<Doctor>,
    ) {}
    
    async getAllDoctors():Promise<Doctor[]>{
        const doctor = this.Doctor.find();
        return doctor;
    }
    
    async signUpDoctor(doctorData:DoctorSignUP):Promise<boolean> {
        console.log(doctorData.firstname);
        const doctor = new this.Doctor({
            firstname:doctorData.firstname,
            lastname:doctorData.lastname,
            email:doctorData.email,
            password:doctorData.password
        })
        console.log(doctor);
        const exist = await this.Doctor.collection.findOne({email: doctorData.email});
        if(exist) {
            console.log("exist")
            return false;
        }
        else {
            await doctor.save();
            return true;
        }
    }

    async signInDoctor(signInData:DoctorSignIn):Promise<any>{
        const {email,password} = signInData;
        const doctor = await this.Doctor.findOne({email:email});
        if(doctor){
            if(doctor.password == password){
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

}
