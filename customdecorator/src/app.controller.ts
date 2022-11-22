import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request,Response } from 'express';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


}
