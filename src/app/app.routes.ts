import {Routes} from '@angular/router';
import {AppShellComponent} from './nav/sidebar/app-shell.component';
import {DevicesPageComponent} from './dashboard/devices/devices-page/devices-page.component';
import {DeviceDetailPageComponent} from './dashboard/devices/device-details/device-details.component';
import {AlertsPageComponent} from './dashboard/alerts/alerts-page/alerts-page.component';
import {authGuard} from './auth/auth.guard';
import {LandingPageComponent} from './public/landing-page/landing-page.component';
import {LoginPageComponent} from './public/login-page/login-page.component';
import {SettingsPageComponent} from "./dashboard/settings-page/settings-page.component";
import {TasksComponent} from "./dashboard/tasks/tasks.component";
import {SupportComponent} from "./dashboard/support/support.component";
import {FeedbackComponent} from "./dashboard/feedback/feedback.component";


export const routes: Routes = [
  { path: '', component: LandingPageComponent },      // public (redirects to /dashboard if authed)
  { path: 'login', component: LoginPageComponent },   // public

  {
    path: '',
    component: AppShellComponent,
    canActivate: [authGuard],
    children: [
      { path: 'devices', component: DevicesPageComponent },
      { path: 'devices/:id', component: DeviceDetailPageComponent },
      { path: 'settings', component: SettingsPageComponent },
      { path: 'alerts', component: AlertsPageComponent },
      { path: 'tasks', component: TasksComponent},
      { path: 'support', component: SupportComponent},
      { path: 'feedback', component: FeedbackComponent}
    ]
  },
  { path: '**', redirectTo: '' },
  { path: '', redirectTo: 'app/devices', pathMatch: 'full' }
];
