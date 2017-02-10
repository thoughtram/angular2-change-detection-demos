// import { bootstrap } from '@angular/platform-browser-dynamic';
// // import { enableProdMode } from '@angular/core';
// import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
// import { CdDemosAppComponent, environment } from './app/';
// import { ToggleStateService } from './app/toggle-state.service';
//
// // if (environment.production) {
// //   enableProdMode();
// // }
//
// bootstrap(CdDemosAppComponent, [ROUTER_PROVIDERS, ToggleStateService]);
//



import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { CdDemosAppModule } from './app/';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CdDemosAppModule);
