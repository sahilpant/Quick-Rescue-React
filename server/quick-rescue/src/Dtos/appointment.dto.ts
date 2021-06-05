import { ApiProperty } from "@nestjs/swagger"

export class AppointmentDto {
    
    @ApiProperty()
    userfirstname:string

    @ApiProperty()
    userlastname:string

    @ApiProperty()
    useremail:string
    
    @ApiProperty()
    doctorfirstname:string
    
    @ApiProperty()
    doctorlastname:string
    
    @ApiProperty()
    doctoremail:string
    
    @ApiProperty()
    date:string

    @ApiProperty()
    time:string
    
    @ApiProperty()
    description:string
}