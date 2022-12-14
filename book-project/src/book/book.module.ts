import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/typeorm/entities/Book';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports:[TypeOrmModule.forFeature([Book],)],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
