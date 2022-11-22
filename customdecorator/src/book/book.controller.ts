import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request,Response } from 'express';
import { Book } from './book.decorator';
@Controller('book')
export class BookController {
     // @Post("addbook")
  // addbook(req:Request,res:Response) {
  //   return res.json(req.body)
  // }

  @Post("addbook")
  addbook(@Req()req:Request,@Res()res:Response) {
    return res.json(req.body)
  }

  @Post("name")
  getName(@Book("name")name:string) {
    return name;
  }
  @Post("author")
  getAuthor(@Book("author")author:string) {
    return author;
  }
}
