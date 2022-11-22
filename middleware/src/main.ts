import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { userAgent } from './middleware/UserAgent.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(userAgent)//here middleware with only allowed to be make global
  await app.listen(3000);
}
bootstrap();
