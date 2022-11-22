import { Injectable } from '@nestjs/common';
import { User } from './app.model';



@Injectable()
export class AppService {
  users:User[]=[];
 constructor(){
 }
  adduser(name:string,age:number){
    const user=new User(name,age)
    this.users.push(user)
    //console.log(this.users)
    return "user added successfully";
  }
  getUser() :User[] {
    return this.users;
  }
}
