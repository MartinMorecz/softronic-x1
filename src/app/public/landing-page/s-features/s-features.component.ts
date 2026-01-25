import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 's-features',
  imports: [
    MatIcon
  ],
  templateUrl: './s-features.component.html',
})
export class SFeaturesComponent {

  features = [
    { icon: 'grid_view', title: 'Device health at a glance', desc: 'See status for all your machines in one clean view.' },
    { icon: 'speed', title: 'CPU & RAM monitoring', desc: 'Spot overloaded devices and bottlenecks in seconds.' },
    { icon: 'storage', title: 'Disk space warnings', desc: 'Get alerts before disks fill up and cause issues.' },
    { icon: 'battery_full', title: 'Battery insights', desc: 'Track battery wear and know which laptops are dying.' },
    { icon: 'wifi_off', title: 'Offline detection', desc: 'Know when a device disappears or hasn’t checked in.' },
    { icon: 'notifications_active', title: 'Simple alerts to your inbox', desc: 'No complex setup. Just thresholds and emails.' },
  ];
}
