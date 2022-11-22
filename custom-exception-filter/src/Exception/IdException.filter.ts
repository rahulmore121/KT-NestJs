import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { IdException } from "./IdException";
import { Response } from "express";

@Catch(IdException) //comma seperated exception in case multiple
export class IdExceptionFilter implements ExceptionFilter{
    catch(exception: IdException, host: ArgumentsHost) {
       const body={
            message: exception.message,
            error:"Id Error"
       };
       const cntxt=host.switchToHttp(); 
       const res=cntxt.getResponse<Response>()
       res.status(HttpStatus.BAD_REQUEST).json(body)
    }
    
}