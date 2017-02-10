// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-two',
    template: `
        <a>Cmp2</a>

        <ul>
            <li>
                <cmp-four></cmp-four>
            </li>
            <li>
                <cmp-five></cmp-five>
            </li>
        </ul>
    `
})
export class ComponentTwo implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
