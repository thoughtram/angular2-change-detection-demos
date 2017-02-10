// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-eight',
    template: `
        <a>Cmp8</a>

        <ul>
            <li>
                <cmp-sixteen></cmp-sixteen>
            </li>
        </ul>
    `
})
export class ComponentEight implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
