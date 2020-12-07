// tslint:disable:component-selector
// tslint:disable:component-class-suffix
// tslint:disable:use-host-property-decorator

import {AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone} from '@angular/core';
import {Subject} from 'rxjs';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-seven',
    host: {
        '(click)': 'emitAndTriggerChangeDetection()'
    },
    template: `
        <a class="on-push click-me">Cmp7</a>

        <ul>
            <li>
                <cmp-fourteen></cmp-fourteen>
            </li>
            <li>
                <cmp-fiveteen></cmp-fiveteen>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSeven implements AfterViewChecked {

    @Input() model: Subject<any>;

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

    emitAndTriggerChangeDetection() {
        this.model.next(null);
    }

}
