import { Injectable } from '@nestjs/common';
import { DoctorSignUP } from 'src/Dtos/doctor.signup.dto';

@Injectable()
export class DoctorService {
    async getAllDoctors( doctorSignUpData: DoctorSignUP ){
        
    }
}
