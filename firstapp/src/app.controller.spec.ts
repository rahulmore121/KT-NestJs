import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService:AppService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService=app.get<AppService>(AppService)
  });

  describe('root', () => {
    it('should return added succefully', () => {
      expect(appController.addUser("rahul",22)).toBe("user added successfully");
    });
    it("get the users",()=>{
      console.log(appService.users);
      expect(appController.getUser()).toEqual(appService.users)
    })
  });
});
