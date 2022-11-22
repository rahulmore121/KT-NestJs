import { Controller, Get, Post,Request } from '@nestjs/common';

@Controller('person')
export class PersonController {
    @Get("/getPerson")
    public getUser(@Request()req:Request){
    console.log(req["ua"]);
    return "this method will send complete Person details"
}

@Post("/PostPerson")
public addUser(){
    return "this will add the Person"
}

}
