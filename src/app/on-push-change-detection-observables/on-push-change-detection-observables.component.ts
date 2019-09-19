// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {Component} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
    selector: 'on-push-cd-observables',
    template: `
        <h2>OnPush Change Detection (Observables)</h2>
        <p>This demo shows how Angular performs change detection only for a path when Observables are used.</p>

        <ol class="list">
            <li>Bootstrapped app, performs CD everywhere</li>
            <li>Click "Trigger CD" button, skips "Cmp1" subtree</li>
            <li>Click "Push to Cmp17", performs CD only on path from root to Cmp17</li>
            <li>Click "Cmp7", skips subtrees of "Cmp6", "Cmp5", "Cmp8" and performs CD on path from root to Cmp17</li>
        </ol>

        <div>
            <button class="trigger" (click)="null">Trigger Change Detection</button>
            <button class="trigger" (click)="emitAndTriggerChangeDetection()">Push to Cmp17</button>
        </div>
        <div class="tree">
            <ul>
                <li>
                    <cmp-one [model]="model"></cmp-one>
                </li>
            </ul>
        </div>
        <div style="margin-bottom: 5em; clear: both;"></div>
    `
})
export class OnPushChangeDetectionObservablesComponent {

    model: Subject<any> = new Subject();
    notifier: Subject<any>;

    emitAndTriggerChangeDetection() {
        this.model.next(null);
    }

}
