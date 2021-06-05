import { Body, Controller, Get, Post,Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppointmentDto } from 'src/Dtos/appointment.dto';
import { UserSignIn, UserSignUp } from 'src/Dtos/user.signup.dto';
import { UserService } from './user.service';

@Controller('userser')
export class UserController {
    constructor(
        private UserService:UserService
    ){}

    @ApiTags("Users Apis")
    @Post('user/getUsers')
    async getAllUsers():Promise<any> {
        return this.UserService.getAllUsers();
    }
    @ApiTags("Users Apis")
    @Post('user/signup')
    async registerDoctor(@Body() signUpData:UserSignUp):Promise<boolean> {
        return this.UserService.signUpUser(signUpData);
    }

    @ApiTags("Users Apis")
    @Post('User/signin')
    async signInUser(@Body() signInData:UserSignIn):Promise<any> {
        return this.UserService.signInUser(signInData);
    }

    @ApiTags("Users Apis")
    @Post('User/bookAppointment')
    async bookAppointment(@Body() appointmentData:AppointmentDto):Promise<any> {
        return this.UserService.bookAppointMent(appointmentData);
    }

    @ApiTags("Users Apis")
    @Get('user/appointment')
    async getUserAppointment(@Query('email') email:string):Promise<any> {
        return this.UserService.getAppointments(email);
    }
}
