import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  
    users:User[]=[]
    getusers(){
        return this.users;
    } 
    
    adduser(name:string,age:number){
        const user=new User(name,age)
        this.users.push(user)
        console.log(this.users)
        return "user added successfully";
      }
}
