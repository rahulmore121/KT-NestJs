import { HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { Injector } from "@nestjs/core/injector/injector";
import { Request, Response, NextFunction } from "express";

export function userAgent(req: Request, res: Response, next: NextFunction) {
    const ua = req.headers["user-agent"]
    console.log(ua);
    let protocol=req.protocol
    let host=req.get("host")
    console.log(host);
    console.log(protocol);
    
    
    req["ua"] = ua;
    //res.json({"status":"sucess"}) //if we do this we need not to call next
    next();//important  if not the it get hangs without sending control to the request handler (contrller)

}


@Injectable()
export class UserAgentMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void) {
        const ua = req.headers["user-agent"] 
        req["ua"] = ua;
        console.log(ua); 
        next();
    }
   

}

