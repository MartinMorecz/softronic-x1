import { Component } from '@angular/core';

@Component({
  selector: 'app-setting-page',
  imports: [],
  template: `
    <div >
    <h1 class="text-3xl font-semibold">Settings</h1>
    <p class="text-slate-300 mt-2">Protected route!</p>
  </div>
  `,
  styleUrl: './setting-page.component.css'
})
export class SettingPageComponent {

}
