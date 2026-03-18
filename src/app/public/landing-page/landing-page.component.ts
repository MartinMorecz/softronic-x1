import {Component, inject, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AuthService} from '../../auth/auth.service';
import {MatDialog} from "@angular/material/dialog";
import {SubscriptionComponent} from "../subscription/subscription.component";
import {HeaderComponent} from "./header/header.component";
import {SHeroComponent} from "./s-hero/s-hero.component";
import {SHowWorksComponent} from "./s-how-works/s-how-works.component";
import {SFeaturesComponent} from "./s-features/s-features.component";
import {STargetAudienceComponent} from "./s-target-audience/s-target-audience.component";
import {SPricingComponent} from "./s-pricing/s-pricing.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";

@Component({
  standalone: true,
  selector: 'app-landing-page',
    imports: [MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, HeaderComponent, SHeroComponent, SHowWorksComponent, SFeaturesComponent, STargetAudienceComponent, SPricingComponent, FooterComponent],
  templateUrl: 'landing-page.component.html'
})
export class LandingPageComponent implements OnInit {

  readonly dialog = inject(MatDialog);

  features = [
    { icon: 'grid_view', title: 'Device health at a glance', desc: 'See status for all your machines in one clean view.' },
    { icon: 'speed', title: 'CPU & RAM monitoring', desc: 'Spot overloaded devices and bottlenecks in seconds.' },
    { icon: 'storage', title: 'Disk space warnings', desc: 'Get alerts before disks fill up and cause issues.' },
    { icon: 'battery_full', title: 'Battery insights', desc: 'Track battery wear and know which laptops are dying.' },
    { icon: 'wifi_off', title: 'Offline detection', desc: 'Know when a device disappears or hasn’t checked in.' },
    { icon: 'notifications_active', title: 'Simple alerts to your inbox', desc: 'No complex setup. Just thresholds and emails.' },
  ];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    // Rule: if logged in and visits / -> redirect to /dashboard
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/devices');
    }
  }

  goLogin() {
    // login needs to be modified via dialog
    this.router.navigateByUrl('/login');
  }

  goRegister() {
    // see login
    console.log("Registration needs to be implemented in the application.");
  }

  doSubscribe(){
    const dialogRef = this.dialog.open(SubscriptionComponent,
        {
          width: '400px',
          minHeight: '600px'
        });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Dialog result: ${result}`);
      }
    })
  }
}
