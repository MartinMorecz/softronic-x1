import {Component, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SomeEnum} from '../../core/enums';

@Component({
  selector: 'app-status-pill',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium border"
          [ngClass]="classes">
      <span class="mr-1.5 h-2 w-2 rounded-full" [ngClass]="dot"></span>
      {{ text() }}
    </span>
  `,
})
export class StatusPillComponent {
  text= input.required<string>();
  tone  = input<SomeEnum>(SomeEnum.NEUTRAL);

  get classes() {
    return {
      'border-emerald-200 bg-emerald-50 text-emerald-800': this.tone() === SomeEnum.GOOD,
      'border-amber-200 bg-amber-50 text-amber-800': this.tone() === SomeEnum.WARN,
      'border-red-200 bg-red-50 text-red-800': this.tone() === SomeEnum.BAD,
      'border-slate-200 bg-slate-50 text-slate-700': this.tone() === SomeEnum.NEUTRAL,
    };
  }

  get dot() {
    return {
      'bg-emerald-500': this.tone() === SomeEnum.GOOD,
      'bg-amber-500': this.tone() === SomeEnum.WARN,
      'bg-red-500': this.tone() === SomeEnum.BAD,
      'bg-slate-400': this.tone() === SomeEnum.NEUTRAL,
    };
  }
}
