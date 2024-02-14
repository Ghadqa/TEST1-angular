import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {runCommand} from "@angular/cli/src/command-builder/command-runner";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(
    private router: Router
  ) {
  }

  onUserClick(){
    this.router.navigate(['user']);

  }
  onAdminClick(){
    this.router.navigate(['admin']);

  }



  navigateToadmin() {
    this.router.navigate(['admin'])

  }
}
