import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { userAgent, UserAgentMiddleware } from 'src/middleware/UserAgent.middleware';
import { UserController } from './user.controller';
import { PersonController } from './person/person.controller';
import { Authentication } from 'src/middleware/Authenticatrion.middleware';

@Module({
  controllers: [UserController, PersonController]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //  consumer.apply(userAgent).forRoutes("user")
    //consumer.apply(UserAgentMiddleware).forRoutes("user/getusers")//omly single roue
    // consumer.apply(UserAgentMiddleware).forRoutes("user","person") //apply this for multiple controller
    //consumer.apply(UserAgentMiddleware).forRoutes("user/getu*rs") //wildcard
    //consumer.apply(UserAgentMiddleware).forRoutes("user/geturs?") 
    //consumer.apply(UserAgentMiddleware).forRoutes(UserController,PersonController) //we can even pass the controller class
    //consumer.apply(UserAgentMiddleware).forRoutes({path:"user",method:RequestMethod.POST})
    //consumer.apply(UserAgentMiddleware).forRoutes({path:"user",method:RequestMethod.ALL})
    consumer.apply(UserAgentMiddleware,Authentication)
    .exclude("user/getusers")
    .forRoutes(UserController, PersonController)

  }
}
