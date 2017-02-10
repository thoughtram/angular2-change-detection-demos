import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CdDemosAppComponent} from './cd-demos.component';
import {ToggleStateService} from './toggle-state.service';
import {RouterModule, Routes} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {DefaultChangeDetectionComponent} from './default-change-detection';
import {ManualChangeDetectionComponent} from './manual-change-detection';
import {DefaultChangeDetectionModule} from './default-change-detection';
import {OnPushChangeDetectionComponent} from './on-push-change-detection';
import {ManualChangeDetectionModule} from './manual-change-detection';
import {OnPushChangeDetectionModule} from './on-push-change-detection';
import {OnPushChangeDetectionObservablesComponent} from './on-push-change-detection-observables';
import {OnPushChangeDetectionObservablesModule} from './on-push-change-detection-observables/on-push-change-detection-observables.module';



/**
 * CdDemosAppModule is the main entry point into Angular's bootstrapping process
 */

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/default-change-detection',
        pathMatch: 'full'
    },
    {
        path: 'default-change-detection',
        component: DefaultChangeDetectionComponent
    },
    {
        path: 'on-push-change-detection',
        component: OnPushChangeDetectionComponent
    },
    {
        path: 'on-push-change-detection-observables',
        component: OnPushChangeDetectionObservablesComponent
    },
    {
        path: 'manual-change-detection',
        component: ManualChangeDetectionComponent
    }
];


@NgModule({
    bootstrap: [CdDemosAppComponent],
    declarations: [
        CdDemosAppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        DefaultChangeDetectionModule,
        ManualChangeDetectionModule,
        OnPushChangeDetectionModule,
        OnPushChangeDetectionObservablesModule
    ],
    providers: [
        ToggleStateService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    exports: [RouterModule],
})
export class CdDemosAppModule {
}
