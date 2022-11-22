import { Body, Controller, DefaultValuePipe, Get, HttpStatus, Param, ParseBoolPipe, ParseFloatPipe, ParseIntPipe, Put, Query, UsePipes } from '@nestjs/common';

@Controller('jobs')
export class JobsController {


// ParseIntPipe
@Get(":id")
findJobById(@Param("id", ParseIntPipe) id: number) {
    console.log(typeof id)
    if(typeof id === "number"){
        return {
            parseintpipeid:id
          }
    }
  throw new Error()
}

// Pipe option for custom error message status code
@Get("details/:id")
findJobDetails(
  @Param(
    "id",
    new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
  )
  id: number
) {
  return {
    parseintpipeid:id
  }
}

// `@UsePipes` decorator to apply the pipe on all arguments (id, inc) of this method
@Put("inc-salary/:id")
@UsePipes(ParseIntPipe)
incSalaryByAmount(@Param("id") id: number, @Query("increment") inc: number) {
  return {
    increment:inc+20
  }
}

// ParseFloatPipe
@Put("salary/:id")
incSalary(
  @Param("id", ParseIntPipe) id: number,
  @Body("increment", ParseFloatPipe) increment: number
) {
   console.log( increment);
    
  return {
    id:id,
    increment:increment+2.0
  }
}

// ParseBoolPipe
@Put("active/:id")
toggleJobActiveStatus(
  @Param("id", ParseIntPipe) id: number,
  @Body("active", ParseBoolPipe) active: boolean
) {
  return {
    active:active
  }
}

// DefaultValuePipe
@Put("exp/:id")
setUpdateJobExp(
  @Param("id", ParseIntPipe) id: number,
  @Query("exp", new DefaultValuePipe(1), ParseIntPipe) exp: number
) {
  return {
    experience:exp  
  }
}

}
