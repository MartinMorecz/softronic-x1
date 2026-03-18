import {Component, computed} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {BatteryTileComponent} from '../device-tiles/battery-tile/battery-tile.component';
import {ApiService} from "../../../core/api.service";
import {StatusPillComponent} from "../../../shared/status-pill/status-pill.component";
import {SomeEnum} from "../../../core/enums";

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
