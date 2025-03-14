import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // ✅ Debe ser AppComponent

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
