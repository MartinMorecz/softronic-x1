import {Component, inject, input, OnInit} from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MetricComponent} from "../../../../shared/metric/metric.component";
import {Device} from "../../../../core/models";
import {HlmCard, HlmCardContent, HlmCardHeader} from "@spartan-ng/helm/card";
import {ApiService} from "../../../../core/api.service";
import {Battery} from "./model/battery";
import {httpResource} from "@angular/common/http";

@Component({
  selector: 'app-battery-tile',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MetricComponent, HlmCard, HlmCardHeader, HlmCardContent],
  templateUrl: './battery-tile.component.html',
})
export class BatteryTileComponent implements OnInit{
  device = input.required<Device>();
  api = inject(ApiService);
  battery =  httpResource<Battery>(() => `${this.api.base}/battery/${this.device().id}`);

  ngOnInit() {

  }

  pct(v?: number) {
    return v === undefined || v === null ? '—' : `${Math.round(v)}%`;
  }

  hr(mins?: number) {
    return mins === undefined || mins === null ? '-' : `${Math.floor(mins / 60)}:${ mins%60 } ⏱️️`
  }
}
