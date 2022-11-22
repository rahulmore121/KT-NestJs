import { Controller, Get, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { BookInterceptor } from './app.interceptor';
import { AppService } from './app.service';
import {Response,Request} from "express"

@Controller("book")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("addbooks")
  @UseInterceptors(BookInterceptor)
  addBooks(@Req()req :Request,@Res() res:Response): any {
    return res.json(req.body);
  
  }
  @Post("addbook")
  @UseInterceptors(BookInterceptor)
  addBook(): any {
    return "this is the  actual response"
  }
}
