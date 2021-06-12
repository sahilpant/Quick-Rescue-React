import { ApiProperty } from "@nestjs/swagger"

export class DoctorSignUP {

    @ApiProperty()
    firstname:string
    
    @ApiProperty()
    lastname:string

    @ApiProperty()
    speciality:string
    
    @ApiProperty()
    email:string
    
    @ApiProperty()
    password:string
}

export class DoctorSignIn {
    
    @ApiProperty()
    email:string

    @ApiProperty()
    password:string
}