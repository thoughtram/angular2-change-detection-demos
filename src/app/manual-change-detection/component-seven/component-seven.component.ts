// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-seven',
    template: `
        <a>Cmp7</a>

        <ul>
            <li>
                <cmp-fourteen></cmp-fourteen>
            </li>
            <li>
                <cmp-fiveteen></cmp-fiveteen>
            </li>
        </ul>
    `
})
export class ComponentSeven implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
