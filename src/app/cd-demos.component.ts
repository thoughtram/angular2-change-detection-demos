// tslint:disable:component-selector

import {AfterViewChecked, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';

import {DefaultChangeDetectionComponent} from './default-change-detection';
import {OnPushChangeDetectionComponent} from './on-push-change-detection';
import {OnPushChangeDetectionObservablesComponent} from './on-push-change-detection-observables';
import {ManualChangeDetectionComponent} from './manual-change-detection';

@Component({
    selector: 'cd-demos-app',
    templateUrl: 'cd-demos.component.html',
    styleUrls: ['cd-demos.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class CdDemosAppComponent implements AfterViewChecked {
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
