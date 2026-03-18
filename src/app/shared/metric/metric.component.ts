import {Component, input, Input} from '@angular/core';


@Component({
  selector: 'app-metric',
  standalone: true,
  imports: [],
  template: `
    <div class="rounded-2xl border border-slate-200 p-4 ">
      <div class="text-s text-slate-500">{{ label() }}</div>
      <div class="mt-1 text-xl font-semibold">{{ value() }}</div>
      @if (hint()) {
        <div class="mt-1 text-xs text-slate-500">{{ hint() }}</div>
      }
    </div>
    `,
})
export class MetricComponent {
  label = input.required<string>();
  value = input.required<string>();
  hint = input<string>();
}
