import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// import { HlmCardImports } from '@spartan-ng/helm/card'; // removed: no longer using hlmCard wrapper
import { HlmInput } from '@spartan-ng/helm/input';
import { StatusPillComponent } from "../../../shared/status-pill/status-pill.component";
import { ApiService } from "../../../core/api.service";
import { SomeEnum } from "../../../core/enums";

@Component({
  selector: 'app-devices-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    // ...HlmCardImports, // removed: no longer using hlmCard wrapper
    HlmInput,
    StatusPillComponent,
  ],
  templateUrl: 'devices-page.component.html',
})
export class DevicesPageComponent {
  // cols = ['name', 'status', 'perf', 'disk', 'security']; // removed: not needed without mat-table
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
