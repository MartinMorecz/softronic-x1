import {Component, computed} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {StatusPillComponent} from '../../shared/status-pill/status-pill.component';
import {ApiService} from '../../core/api.service';
import {AlertEvent} from '../../core/models';
import {SomeEnum} from '../../core/enums';

@Component({
  selector: 'app-alerts-page',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatIconModule, StatusPillComponent],
  templateUrl: './alerts-page.component.html',
  styleUrls: ['./alerts-page.component.css']
})
export class AlertsPageComponent {
  alerts = computed(() => this.api.alerts());

  constructor(private api: ApiService) {}

  ack(a: AlertEvent) { this.api.acknowledgeAlert(a.id); }

  tone(a: AlertEvent): SomeEnum {
    if (a.severity === 'CRITICAL') return SomeEnum.BAD;
    if (a.severity === 'WARNING') return SomeEnum.WARN;
    if (a.severity === 'INFO') return SomeEnum.NEUTRAL;
    return SomeEnum.NEUTRAL;
  }

  icon(a: AlertEvent) {
    switch (a.type) {
      case 'OVERHEAT': return 'device_thermostat';
      case 'LOW_DISK': return 'warning';
      case 'HIGH_CPU': return 'speed';
      case 'LOW_BATTERY_HEALTH': return 'battery_alert';
      case 'OFFLINE_TOO_LONG': return 'wifi_off';
      case 'SECURITY_UPDATES_PENDING': return 'security';
      case 'SMART_FAIL': return 'hard_drive';
      default: return 'notifications';
    }
  }
}
