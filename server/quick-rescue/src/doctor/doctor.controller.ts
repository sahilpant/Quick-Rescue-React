import { Body, Controller, Get, Post } from '@nestjs/common';
import { DoctorSignIn, DoctorSignUP } from 'src/Dtos/doctor.signup.dto';
import { Doctor } from 'src/interfaces/doctor.interface';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {
    constructor(
        private DoctorService:DoctorService
    ){}
    @Get('doctor/get')
    async getAllDoctor():Promise<Doctor[]>{
        return this.DoctorService.getAllDoctors();
    }

    @Post('doctor/signup')
    async registerDoctor(@Body() signUpData:DoctorSignUP):Promise<boolean> {
        return this.DoctorService.signUpDoctor(signUpData);
    }
    @Post('doctor/signin')
    async signInDoctor(@Body() signInData:DoctorSignIn):Promise<any> {
        return this.DoctorService.signInDoctor(signInData);
    }
}
