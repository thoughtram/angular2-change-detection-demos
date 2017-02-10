// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../..//toggle-class.service';

@Component({
    selector: 'cmp-ten',
    template: `
        <a class="on-push">Cmp10</a>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTen implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

    triggerChangeDetection() {
    }

}
