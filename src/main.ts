import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// @ts-ignore
import { AppModule } from './main/app/app.nodules.ts';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

