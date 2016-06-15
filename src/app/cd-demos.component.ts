import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {Subject} from 'rxjs/Rx';

import { DefaultChangeDetectionComponent } from './default-change-detection';
import { OnPushChangeDetectionComponent } from './on-push-change-detection';
import { OnPushChangeDetectionObservablesComponent } from './on-push-change-detection-observables';
import {ManualChangeDetectionComponent} from './manual-change-detection';

@Component({
  moduleId: module.id,
  selector: 'cd-demos-app',
  templateUrl: 'cd-demos.component.html',
  styleUrls: ['cd-demos.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/default-change-detection', component: DefaultChangeDetectionComponent, name: 'DefaultChangeDetection', useAsDefault: true},
  { path: '/on-push-change-detection', component: OnPushChangeDetectionComponent, name: 'OnPushChangeDetection'},
  { path: '/on-push-change-detection-observables', component: OnPushChangeDetectionObservablesComponent, name: 'OnPushChangeDetectionObservables'},
  { path: '/manual-change-detection', component: ManualChangeDetectionComponent, name: 'ManualChangeDetection'}
])
export class CdDemosAppComponent {
  @ViewChild(DefaultChangeDetectionComponent) defaultChangeDetectionCmp: DefaultChangeDetectionComponent;
  @ViewChild(OnPushChangeDetectionComponent) onPushChangeDetectionCmp: OnPushChangeDetectionComponent;
  @ViewChild(OnPushChangeDetectionObservablesComponent) onPushChangeDetectionObservablesCmp: OnPushChangeDetectionObservablesComponent;
  @ViewChild(ManualChangeDetectionComponent) manualChangeDetectionCmp: ManualChangeDetectionComponent;
  notifier: Subject<any> = new Subject();

  ngAfterViewChecked() {
    if (this.defaultChangeDetectionCmp) {
      this.defaultChangeDetectionCmp.notifier = this.notifier;
    }

    if (this.onPushChangeDetectionCmp) {
      this.onPushChangeDetectionCmp.notifier = this.notifier;
    }

    if (this.onPushChangeDetectionObservablesCmp) {
      this.onPushChangeDetectionObservablesCmp.notifier = this.notifier;
    }

    if (this.manualChangeDetectionCmp) {
      this.manualChangeDetectionCmp.notifier = this.notifier;
    }
  }
}
