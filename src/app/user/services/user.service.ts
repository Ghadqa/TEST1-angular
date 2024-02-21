import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
  message: Array<any> = []


  constructor() {
    this.init();
  }
  init():void{
    this.insert({
      username:"ghada" ,
      password: "ghada"
    })


  }

  insert (message: {username: string, password: string}):void {
 this.message.push(message);
  }
  getAllMessage():any[]{
    return this.message;
  }
  deleteMessage (index: number):void{
    this.message.splice(index);
  }
}
