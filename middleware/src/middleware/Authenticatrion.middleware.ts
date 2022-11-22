import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class Authentication implements NestMiddleware{
    use(req: any, res: any, next:NextFunction) {
        const ua = req.headers["user-agent"] 
        req["ua"] = ua;
        console.log(ua); 
        next();
    }

}