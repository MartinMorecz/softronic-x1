import {Component, input} from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MetricComponent} from '../../../shared/metric/metric.component';
import {Device} from '../../../core/models';

@Component({
  selector: 'app-storage-tile',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatDividerModule, MetricComponent],
  templateUrl: 'storage-tile.component.html',
  styleUrl: 'storage-tile.component.css'
})
export class StorageTileComponent {
  device = input.required<Device>();

  pct(v?: number) { return v === undefined || v === null ? '—' : `${Math.round(v)}%`; }
  gb(v?: number) { return v === undefined || v === null ? '—' : `${Math.round(v)} GB`; }
}
