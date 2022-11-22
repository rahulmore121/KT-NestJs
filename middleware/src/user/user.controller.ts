import { Controller, Get, Post, Request } from '@nestjs/common';

@Controller('user')
export class UserController {

@Get("/getusers")
public getUser(@Request()req:Request){
    console.log(req["ua"]);
    return "this method will send complete user details"
}

@Post("/Postusers")
public addUser(){
    return "this will add the user"
}


}
