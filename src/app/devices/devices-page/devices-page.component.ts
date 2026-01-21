import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {StatusPillComponent} from '../../shared/status-pill/status-pill.component';
import {ApiService} from '../../core/api.service';
import {SomeEnum} from '../../core/enums';

@Component({
  selector: 'app-devices-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    StatusPillComponent,
  ],
  templateUrl: 'devices-page.component.html',
})
export class DevicesPageComponent {
  cols = ['name', 'status', 'perf', 'disk', 'security'];
  query = signal('');

  constructor(private api: ApiService) {}

  filtered = computed(() => {
    const q = this.query().toLowerCase();
    const list = this.api.devices();
    if (!q) return list;
    return list.filter(d =>
      [d.name, d.owner ?? '', d.model, ...(d.tags ?? [])]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  });

  pct(v?: number) {
    return (v === undefined || v === null) ? '—' : `${Math.round(v)}%`;
  }

  protected readonly SomeEnum = SomeEnum;
}
