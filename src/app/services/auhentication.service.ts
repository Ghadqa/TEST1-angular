import { Injectable } from '@angular/core';
import {AppUser} from "./user.model";
import {Observable, of, throwError} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AuhenticationService {
  users: AppUser[]=[];
  authenticatedUser :AppUser| undefined;


  constructor() {
    this.users.push({ userId:crypto.randomUUID(),username: "user1",password:"1234", roles:["user"]})
    this.users.push({userId:crypto.randomUUID(),username: "admin",password:"1234", roles:["user","admin"]})
    this.users.push({userId:crypto.randomUUID(),username: " user2",password:"1234", roles:["user"]})
  }
  public Login(username:string , password:string):Observable<AppUser>{
    let appUser=this.users.find(u=>u.username=username);
    if (!appUser)  return throwError(()=>new Error("user not found"));
    if (appUser.password!=password){
      return throwError(()=>new Error( "Bad credentials"))

    }
   return of(appUser);
  }
  public authenticateUser(appUser:AppUser):Observable<Boolean>{
    this.authenticatedUser=appUser;
    localStorage.setItem("authUser", JSON.stringify({username: appUser.username ,roles: appUser.roles,jwt:"JWT_TOKEN"}));
     return  of( true);
  }

  public hasRole (role : string ): boolean{
     return this.authenticatedUser!.roles.includes(role);

  }
  public  isAuthenticated()
  {return this.authenticatedUser!=undefined;
}

}
console.log(crypto.randomUUID())
