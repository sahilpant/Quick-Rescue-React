import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.signup';
import { Appointment } from 'src/schemas/appointments';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports:[
    MongooseModule.forFeature([{ name:'User', schema: User },{name: 'Appointment', schema: Appointment}])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
