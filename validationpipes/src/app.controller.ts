import { Body, Controller, Get, HttpStatus, Param, ParseArrayPipe, ParseEnumPipe, ParseIntPipe, ParseUUIDPipe, Put, Query, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { JobType } from './Job';

@Controller("jobs")
// @UsePipes(ParseIntPipe)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("ref/:refid")
  //getHello(@Param("refid",ParseUUIDPipe)refid:string) {
    getHello(@Param("refid",new ParseUUIDPipe({version:"4",errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE}))refid:string) {
    //d53284ea-9150-422e-895f-93917d3d9ab7", // UUID v4
    //6375de98-3dc4-3385-bf55-5c4434132c48", // UUID v3
    return {
        uuid:refid
    };
    
  }
  @Put("type/:id")
  toggleJobType(
    @Param("id") id: number,
    @Body("type", new ParseEnumPipe(JobType)) type: JobType
  ) {
    return {
      type:type
    }
  }
  @Get("search")
  //need to install class validator and class transformer

findJobById(@Query("id",new ParseArrayPipe( {items:Number,separator:","})) inc: number[]) {
  console.log(inc);
  
  return {
 number:inc
  }
}
}
