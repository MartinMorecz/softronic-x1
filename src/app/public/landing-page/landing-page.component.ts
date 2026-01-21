import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {AuthService} from '../../auth/auth.service';

@Component({
  standalone: true,
  selector: 'app-landing-page',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule],
  templateUrl: 'landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
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
    this.router.navigateByUrl('/login');
  }
}
