// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../..//toggle-class.service';

@Component({
    selector: 'cmp-fourteen',
    template: `
        <a class="on-push">Cmp14</a>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentFourteen implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
