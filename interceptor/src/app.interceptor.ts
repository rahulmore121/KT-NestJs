import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import {Response,Request} from "express"

//                     request
// client ----------->interceptor------>routehandler
// client <-----------interceptor<-----routehandler       
//                     response


@Injectable()
export class BookInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>  {
        console.log("this is the interceptor");
        const ctx=context.switchToHttp()
        const req=ctx.getRequest<Request>()
        req.body.name="Rahul"
        req.body.age=20
        return next.handle().pipe(map((data)=>{
            return "this is from interceptor"
        }));
    }
    
}