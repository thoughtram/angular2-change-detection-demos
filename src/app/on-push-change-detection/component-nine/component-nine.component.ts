// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-nine',
    template: `
        <a>Cmp9</a>

        <ul>
            <li>
                <cmp-seventeen></cmp-seventeen>
            </li>
        </ul>
    `
})
export class ComponentNine implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
