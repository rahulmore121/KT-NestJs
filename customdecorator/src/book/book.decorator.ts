import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request,Response } from 'express';
export const Book=createParamDecorator((data:string,executioncontext:ExecutionContext)=>{
    const ctxt=executioncontext.switchToHttp();
    const req=ctxt.getRequest<Request>();
    return req.body? req.body?.[data] : req.body
}
)