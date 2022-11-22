import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import{Request,Response} from "express"

@Injectable()
export class BookGuard implements CanActivate{
    public username:string="rahulmore121"
    public password:string="rahulmore121"
    canActivate(context: ExecutionContext): boolean  {
      const cntxt=context.switchToHttp()
      const req= cntxt.getRequest<Request>()
      if(req.header('username')==undefined ||req.header('password')==undefined )
      return false;

      return req.header('username')===this.username && req.header('password')===this.password
    }
    
}