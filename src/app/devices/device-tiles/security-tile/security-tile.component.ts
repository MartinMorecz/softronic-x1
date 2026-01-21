import {Component, input, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {Device} from '../../../core/models';
import {StatusPillComponent} from '../../../shared/status-pill/status-pill.component';
import {MetricComponent} from '../../../shared/metric/metric.component';
import {SomeEnum} from '../../../core/enums';

@Component({
  selector: 'app-security-tile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MetricComponent, StatusPillComponent],
  templateUrl: './security-tile.component.html',
  styleUrls: ['./security-tile.component.css']
})
export class SecurityTileComponent {
  device = input.required<Device>();

  osLine() {
    const n = this.device().osName ?? '—';
    const v = this.device().osVersion ? ` ${this.device().osVersion}` : '';
    return `${n}${v}`;
  }
  yesNo(v?: boolean) { return v === undefined ? '—' : (v ? 'Yes' : 'No'); }

  num(v?: number) { return v === undefined || v === null ? '—' : `${v}`; }

  postureTone(): SomeEnum {
    const up : boolean | undefined = this.device().upToDate;
    const pending = this.device().pendingSecurityUpdates ?? 0;
    if (!up && pending >= 5) return SomeEnum.BAD;
    if (!up || pending > 0) return SomeEnum.WARN;
    if (up && pending === 0) return SomeEnum.GOOD;
    return SomeEnum.NEUTRAL;
  }

  postureLabel(): string {
    const tone = this.postureTone();
    if (tone === SomeEnum.GOOD) return 'Good';
    if (tone === SomeEnum.WARN) return 'Needs attention';
    if (tone === SomeEnum.BAD) return 'Vulnerable';
    return 'Unknown';
  }
}
