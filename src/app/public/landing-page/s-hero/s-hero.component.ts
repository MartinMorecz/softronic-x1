import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";
import {LandingpageService} from "../service/landingpage.service";

@Component({
  selector: 's-hero',
  imports: [
    MatButton,
    MatIcon
  ],
  templateUrl: './s-hero.component.html'
})
export class SHeroComponent {

  private router = inject(Router);
  private landingpageService = inject(LandingpageService);

  joinWaitingList() {
    // login needs to be modified via dialog
    // this.router.navigateByUrl('/login');
    this.landingpageService.joinWaitingList();
  }

  getInvolved() {
    // see login
    this.landingpageService.getInvolved();
    console.log("Registration needs to be implemented in the application.");
  }
}
