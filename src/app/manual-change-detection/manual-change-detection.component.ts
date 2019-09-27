// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {Component} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
    selector: 'manual-cd',
    template: `
        <h2>Manual Change Detection</h2>
        <p>This demo shows how a change detector is detached from the change detector tree
            and performes change detection manually.</p>


        <ol class="list">
            <li>The app is bootstrapped (reload browser to double-check)</li>
            <li>The "Trigger CD" button is clicked</li>
        </ol>

        <div>
            <button (click)="null">Trigger Change Detection</button>
            <label for="toggle">
                <input id="toggle" #attach type="checkbox" (click)="attachOrDetachChangeDetector(attach.checked)">
                Attach/Detach Change Detector
            </label>
        </div>
        <div class="tree">
            <ul>
                <li>
                    <cmp-one [notifier]="attachOrDetachNotifier"></cmp-one>
                </li>
            </ul>
        </div>
        <div style="margin-bottom: 5em; clear: both;"></div>
    `
})
export class ManualChangeDetectionComponent {

    attachOrDetachNotifier: Subject<any> = new Subject();
    notifier: Subject<any>;

    attachOrDetachChangeDetector(attach) {
        this.attachOrDetachNotifier.next(attach);
    }

}
