import { Component } from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string ='';
  password: string ='';
  messages: Array<any> = [];
  constructor(
    private  service: UserService
  ){
    this.messages=this.service.getAllMessage();
  }


  onlogin() {
    console.log(this.username)

  }
}
