import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {DevicesPageComponent} from './app/devices/devices-page/devices-page.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
