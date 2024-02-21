import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [


  {
    path: 'admin', component: AdminComponent, children:[ {
      path: 'user',
      component: UserComponent
    },

    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
