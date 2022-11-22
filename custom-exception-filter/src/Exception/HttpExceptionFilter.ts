import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response,Request } from "express";
@Catch(HttpException)
export class HttpFilterException implements ExceptionFilter{
    catch(exception:HttpException, host: ArgumentsHost) {
      const ctx=host.switchToHttp()
      const res=ctx.getResponse<Response>();
      const req=ctx.getRequest<Request>();
      const status=exception.getStatus( );
      const mes=exception.message;

      const body={
        statusCode: status,
        timestamp:new Date().toISOString(),
        message:mes,
        path:req.url
   };
   res.status(status).json(body)
    }
    
}