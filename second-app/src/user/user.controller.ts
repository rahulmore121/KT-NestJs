import { Body, Controller, Get, Header, HttpCode, Post } from '@nestjs/common';
import {UserService} from './user.service'
@Controller('')
export class UserController {
    constructor(private userservice:UserService){}
    
    @Get("/users")
    getuser(){
        return this.userservice.getusers();
    }
    
    @Post("/adduser")
    @HttpCode(204)
    addUser(@Body('name') name:string,@Body('age')age:number){
      return this.userservice.adduser(name,age)
    }

}
