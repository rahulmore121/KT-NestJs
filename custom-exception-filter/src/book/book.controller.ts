import {
    BadRequestException,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { HttpFilterException } from 'src/Exception/HttpExceptionFilter';
import { IdException } from 'src/Exception/IdException';
import { IdExceptionFilter } from 'src/Exception/IdException.filter';




//@UseFilters(IdExceptionFilter)
@Controller('book')
export class BookController {
  @Get('/:id')
  @UseFilters(HttpFilterException)
  @UseFilters(IdExceptionFilter)
  getBookById(@Param('id', ParseIntPipe) id: number) {
    if (id < 0) {
      //throw new IdException();
      throw new BadRequestException("Invalid id");
    }
    return { sucess: true, id };
  }

  
}
