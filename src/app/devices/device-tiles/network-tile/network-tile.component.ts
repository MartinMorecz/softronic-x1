import {Component, input, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MetricComponent} from '../../../shared/metric/metric.component';
import {StatusPillComponent} from '../../../shared/status-pill/status-pill.component';
import {Device} from '../../../core/models';
import {SomeEnum} from '../../../core/enums';

@Component({
  selector: 'app-network-tile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MetricComponent, StatusPillComponent],
  templateUrl: './network-tile.component.html',
})
export class NetworkTileComponent {

  device = input.required<Device>();

  ms(v?: number) { return v === undefined || v === null ? '—' : `${Math.round(v)} ms`; }
  pct(v?: number) { return v === undefined || v === null ? '—' : `${v.toFixed(1)}%`; }

  protected readonly SomeEnum = SomeEnum;
}
