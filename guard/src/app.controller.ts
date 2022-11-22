import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { BookGuard } from './books.gurad';

@Controller("book")
// @UseGuards(new BookGuard())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/getbook")
  @UseGuards(new BookGuard())
  getBook(): string {
    return "this will return all the books"
  }
}
