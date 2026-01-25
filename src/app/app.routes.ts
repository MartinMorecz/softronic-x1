import {Routes} from '@angular/router';
import {AppShellComponent} from './layout/app-shell/app-shell.component';
import {DevicesPageComponent} from './devices/devices-page/devices-page.component';
import {DeviceDetailPageComponent} from './devices/device-details/device-details.component';
import {AlertsPageComponent} from './alerts/alerts-page/alerts-page.component';
import {authGuard} from './auth/auth.guard';
import {LandingPageComponent} from './public/landing-page/landing-page.component';
import {LoginPageComponent} from './public/login-page/login-page.component';
import {SettingPageComponent} from './public/setting-page/setting-page.component';


export const routes: Routes = [
  { path: '', component: LandingPageComponent },      // public (redirects to /dashboard if authed)
  // { path: 'login', component: LoginPageComponent },   // public

  // {
  //   path: '',
  //   component: AppShellComponent,
  //   canActivate: [authGuard],
  //   children: [
  //     { path: 'devices', component: DevicesPageComponent },
  //     { path: 'devices/:id', component: DeviceDetailPageComponent },
  //     { path: 'settings', component: SettingPageComponent },
  //     { path: 'alerts', component: AlertsPageComponent },
  //   ]
  // },

  { path: '**', redirectTo: '' }
  // { path: '', redirectTo: 'app/devices', pathMatch: 'full' },
  // {
  //   path: 'app',
  //   component: AppShellComponent,
  //   children: [
  //     { path: '', redirectTo: 'devices', pathMatch: 'full' },
  //     { path: 'devices', component: DevicesPageComponent,
  //     title: 'Devices | Softronic'},
  //     { path: 'devices/:id', component: DeviceDetailPageComponent },
  //     { path: 'alerts',
  //       loadComponent: () => import('./alerts/alerts-page/alerts-page.component').then((m) => m.AlertsPageComponent),
  //       title: 'Alerts | Softronic'},
  //   ]
  // },
  // { path: '**', redirectTo: 'app/devices' },
];
