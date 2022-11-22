import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get('/:id')
  getBookById(@Param('id', ParseIntPipe) id: number) {
    if (id < 0) {
      //throw new Error()//unrecognized Error

      //Recognized Exception
      
      //throw new HttpException("invalid ID",400)//it will wrap in to object  {meessage:"invalid id " ,status :400}
      //throw new HttpException("invalid ID",HttpStatus.FORBIDDEN)//even we can use htppstatus enum
      //throw new HttpException({error:"Invalid Id",message:"Id must be greater than 0",timestamp:Date.now(),data:id},HttpStatus.BAD_REQUEST)
    //   throw new BadRequestException('Something bad happened', {
    //     cause: new Error(),
    //     description: 'Some error description',
    //   });
    //throw new BadRequestException("invalid ID")
    // throw new BadRequestException("invalid ID","id is not valid")

    throw new BadRequestException({error:"Invalid Id",message:"Id must be greater than 0",timestamp:Date.now(),data:id})




    }
    return 'hiii';
  }
}
