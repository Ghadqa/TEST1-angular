import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./user/services/user.service";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,

    UserComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService,
    provideClientHydration(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
