import { ApiProperty } from "@nestjs/swagger"

export class UserSignUp {
    
    @ApiProperty()
    firstname:string

    @ApiProperty()
    lastname:string
    
    @ApiProperty()
    email:string

    @ApiProperty()
    password:string
}

export class UserSignIn {
    
    @ApiProperty()
    email:string

    @ApiProperty()
    password:string
}