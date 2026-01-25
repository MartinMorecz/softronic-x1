import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import {LandingpageService} from "../service/landingpage.service";

@Component({
  selector: 's-header',
  imports: [
    MatButton,
    MatToolbar
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  private router = inject(Router);
  private landingpageService = inject(LandingpageService);

  goLogin() {
    // login needs to be modified via dialog
    this.router.navigateByUrl('/login');
  }

  goRegister() {
    // see login
    console.log("Registration needs to be implemented in the application.");
  }

  joinWaitingList() {
    this.landingpageService.joinWaitingList();
  }

  getInvolved(){
    this.landingpageService.getInvolved();
  }
}
