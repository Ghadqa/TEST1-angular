import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuhenticationService} from "../services/auhentication.service";
import {AppUser} from "../services/user.model";
import {app} from "../../../server";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements  OnInit{

  userFormGroup! :FormGroup;
  errorMessage : any ;

  constructor(private fb:FormBuilder ,
              private authService :AuhenticationService
                ,private router :Router) {
  }
 ngOnInit() {
   this.userFormGroup = this.fb.group({
     username: this.fb.control(""),
     password: this.fb.control("")
   });
 }





   handlelogin() {
    let username=this.userFormGroup.value.username;
    let password=this.userFormGroup.value.password;
    this.authService.Login(username,password).subscribe({
      next:(appUser :AppUser)=>{
        this.authService.authenticateUser(appUser).subscribe({
          next:(data:Boolean)=>{
            this.router.navigateByUrl("/user");
          }
        });

      },
      error: (err)=>{
        this.errorMessage=err;
      }
    })

  }

}
