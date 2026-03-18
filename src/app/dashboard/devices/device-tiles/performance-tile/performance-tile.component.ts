import {Component, input} from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MetricComponent} from "../../../../shared/metric/metric.component";
import {Device} from "../../../../core/models";
import {formatUptime} from "../../../../core/utils";

@Component({
  selector: 'app-performance-tile',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MetricComponent],
  templateUrl: 'performance-tile.component.html'
})
export class PerformanceTileComponent {
  device = input.required<Device>();

  pct(v?: number) { return v === undefined || v === null ? '—' : `${Math.round(v)}%`; }
  num(v?: number) { return v === undefined || v === null ? '—' : `${v}`; }
  uptime(v?: number) { return formatUptime(v); }
}
