import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {StatusPillComponent} from '../../shared/status-pill/status-pill.component';
import {BatteryTileComponent} from '../device-tiles/battery-tile/battery-tile.component';
import {PerformanceTileComponent} from '../device-tiles/performance-tile/performance-tile.component';
import {StorageTileComponent} from '../device-tiles/storage-tile/storage-tile.component';
import {NetworkTileComponent} from '../device-tiles/network-tile/network-tile.component';
import {SecurityTileComponent} from '../device-tiles/security-tile/security-tile.component';
import {HardwareTileComponent} from '../device-tiles/hardware-tile/hardware-tile.component';
import {ApiService} from '../../core/api.service';
import {SomeEnum} from '../../core/enums';

@Component({
  selector: 'app-device-detail-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    StatusPillComponent,

    BatteryTileComponent,
    PerformanceTileComponent,
    StorageTileComponent,
    NetworkTileComponent,
    SecurityTileComponent,
    HardwareTileComponent,
  ],
  templateUrl: 'device-details.component.html',
})
export class DeviceDetailPageComponent {
  private id: string;
  device = computed(() => this.api.deviceById(this.id)());

  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.id =  this.route.snapshot.paramMap.get('id') ?? '';
  }

  refresh() {
    // placeholder for real API refresh
  }

  protected readonly SomeEnum = SomeEnum;
}
