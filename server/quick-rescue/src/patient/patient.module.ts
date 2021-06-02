import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.signup';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';

@Module({
  imports:[
    MongooseModule.forFeature([{ name:'user', schema: User }])
  ],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule {}
