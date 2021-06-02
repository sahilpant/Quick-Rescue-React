import { Controller, Get, Query } from '@nestjs/common';
import { DoctorSignUP } from 'src/Dtos/doctor.signup.dto';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {
    constructor(
        private DoctorService:DoctorService
    ){}
    @Get('doctor/signup')
    async doctorSignUp(@Query('signUpData') signUpData:DoctorSignUP) {
        this.DoctorService
    }
}
