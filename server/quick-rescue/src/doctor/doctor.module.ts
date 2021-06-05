import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Doctor } from 'src/schemas/doctor.signup';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Doctor', schema: Doctor }])
  ],
  controllers: [DoctorController],
  providers: [DoctorService]
})
export class DoctorModule {}
