import { Module } from '@nestjs/common';
import { DoctorModule } from './doctor/doctor.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv'
dotenv.config();
@Module({
  imports: [
    DoctorModule, 
    UserModule,
    MongooseModule.forRoot(process.env.DB_URL)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
