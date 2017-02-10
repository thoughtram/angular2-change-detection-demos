// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    NgZone
} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-two',
    template: `
        <a class="on-push">Cmp2</a>

        <ul>
            <li>
                <cmp-four></cmp-four>
            </li>
            <li>
                <cmp-five></cmp-five>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTwo implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef, private cd: ChangeDetectorRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
