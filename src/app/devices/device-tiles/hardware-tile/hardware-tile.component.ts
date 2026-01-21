import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {Device} from '../../../core/models';
import {MetricComponent} from '../../../shared/metric/metric.component';
import {ageFromDate} from '../../../core/utils';

@Component({
  selector: 'app-hardware-tile',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MetricComponent],
  templateUrl: './hardware-tile.component.html',
  styleUrls: ['./hardware-tile.component.css']
})
export class HardwareTileComponent {
  @Input({ required: true }) device!: Device;

  age(d?: string) { return ageFromDate(d); }
  warranty() {
    return this.device.warrantyExpiry ? new Date(this.device.warrantyExpiry).toLocaleDateString() : '—';
  }
}
