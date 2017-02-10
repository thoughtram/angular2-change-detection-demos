// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-four',
    template: `
        <a>Cmp4</a>

        <ul>
            <li>
                <cmp-eight></cmp-eight>
            </li>
            <li>
                <cmp-nine></cmp-nine>
            </li>
        </ul>
    `
})
export class ComponentFour implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

    triggerChangeDetection() {
    }

}
