import {Component, input, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MetricComponent} from '../../../shared/metric/metric.component';
import {Device} from '../../../core/models';

@Component({
  selector: 'app-battery-tile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MetricComponent],
  templateUrl: './battery-tile.component.html',
})
export class BatteryTileComponent {
  device = input.required<Device>();

  pct(v?: number) {
    return v === undefined || v === null ? '—' : `${Math.round(v)}%`;
  }
}
