/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DoctorSignIn, DoctorSignUP } from 'src/Dtos/doctor.signup.dto';
import { Doctor } from 'src/interfaces/doctor.interface';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {
    constructor(
        private DoctorService:DoctorService
    ){}
    
    @ApiTags("Doctors Apis")
    @Get('doctor/get')
    async getAllDoctor():Promise<Doctor[]>{
        return this.DoctorService.getAllDoctors();
    }

    @ApiResponse({status:200,type:DoctorSignUP})
    @ApiTags("Doctors Apis")
    @Post('doctor/signup')
    async registerDoctor(@Body() signUpData:DoctorSignUP):Promise<any> {
        return this.DoctorService.signUpDoctor(signUpData);
    }

    @ApiResponse({status:200,type:DoctorSignIn})
    @ApiTags("Doctors Apis")
    @Post('doctor/signin')
    async signInDoctor(@Body() signInData:DoctorSignIn):Promise<any> {
        return this.DoctorService.signInDoctor(signInData);
    }

    @ApiResponse({status:200})
    @ApiTags("Doctors Apis")
    @Get('doctor/appointment')
    async getUserAppointment(@Body() email:string):Promise<any> {
        return this.DoctorService.getAppointments(email);
    }
}
