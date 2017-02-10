// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {Component} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ToggleStateService} from '../toggle-state.service';

@Component({
    selector: 'on-push-cd',
    template: `
        <h2>OnPush Change Detection</h2>
        <p>This demo shows how change detection skips a component's subtree when
            it's set to <code>OnPush</code> and non of its input property change or an
            event is fired inside that component.</p>

        <ol class="list">
            <li>Bootstrapped app, performs CD everywhere (reload to check)</li>
            <li>Click "Trigger CD" button, skips "Cmp2" subtree</li>
            <li>Click "Cmp12", skips "Cmp2" subtree</li>
            <li>Click "Cmp10", skips "Cmp8" subtree</li>
            <li>Click "Cmp16", performs CD everywhere</li>
        </ol>

        <div>
            <button class="trigger" (click)="null">Trigger Change Detection</button>
        </div>
        <div class="tree">
            <ul>
                <li>
                    <cmp-one></cmp-one>
                </li>
            </ul>
        </div>
        <div style="margin-bottom: 5em; clear: both;"></div>
    `
})
export class OnPushChangeDetectionComponent {

    notifier: Subject<any>;

    constructor(private toggleStateService: ToggleStateService) {
    }

    notifyInterval(runInterval) {
        this.notifier.next(runInterval);
    }

}
