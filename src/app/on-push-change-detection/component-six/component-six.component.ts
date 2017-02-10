// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-six',
    template: `
        <a>Cmp6</a>

        <ul>
            <li>
                <cmp-twelve></cmp-twelve>
            </li>
            <li>
                <cmp-thirteen></cmp-thirteen>
            </li>
        </ul>
    `
})
export class ComponentSix implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
