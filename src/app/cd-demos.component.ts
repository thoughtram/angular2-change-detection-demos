// tslint:disable:component-selector

import {AfterViewChecked, Component, ViewChild, ViewEncapsulation} from '@angular/core';

import {DefaultChangeDetectionComponent} from './default-change-detection';
import {OnPushChangeDetectionComponent} from './on-push-change-detection';
import {OnPushChangeDetectionObservablesComponent} from './on-push-change-detection-observables';
import {ManualChangeDetectionComponent} from './manual-change-detection';
import {Subject} from 'rxjs';

@Component({
  selector: 'cd-demos-app',
  templateUrl: 'cd-demos.component.html',
  styleUrls: ['cd-demos.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CdDemosAppComponent {

}
