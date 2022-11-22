import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { HttpFilterException } from './Exception/HttpExceptionFilter';

@Module({
  imports: [BookModule],
  controllers: [AppController],
  providers: [AppService,{
    
  }],
})
export class AppModule {}
