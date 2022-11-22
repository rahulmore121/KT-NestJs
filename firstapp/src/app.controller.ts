import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './app.model';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post("/adduser")
  addUser(@Body('name') name:string,@Body('age')age:number){
    return this.appService.adduser(name,age)
  }
 
  @Get("/users")          
  getUser():User[]{
    return this.appService.getUser();
  }
}
