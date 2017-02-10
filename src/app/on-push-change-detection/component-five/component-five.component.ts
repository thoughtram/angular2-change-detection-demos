// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-five',
    template: `
        <a>Cmp5</a>

        <ul>
            <li>
                <cmp-ten></cmp-ten>
            </li>
            <li>
                <cmp-eleven></cmp-eleven>
            </li>
        </ul>
    `
})
export class ComponentFive implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
