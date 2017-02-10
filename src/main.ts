import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';
import {CdDemosAppModule} from './app/';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CdDemosAppModule);
