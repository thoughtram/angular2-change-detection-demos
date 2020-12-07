// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    NgZone,
    OnInit
} from '@angular/core';
import {Subject} from 'rxjs';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-seventeen',
    template: `
        <a class="on-push subscriber">Cmp17</a>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSeventeen implements OnInit, AfterViewChecked {

    @Input() model: Subject<any>;

    constructor(private zone: NgZone, private el: ElementRef, private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.model.subscribe(() => {
            this.cd.markForCheck();
            toggleClass(this.el, this.zone, 'checked-observable');
        });
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
