import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ParseDatePipe } from './parse-date.pipe';

@Controller("jobs")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post(":id/interview")
  createJob(@Param("id",ParseIntPipe)id:number,@Body("timestamp",ParseDatePipe)date:string): string {
   
   console.log(date) 
   return date;
  }
}
