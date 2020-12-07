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
    selector: 'cmp-two',
    template: `
        <a class="detached">Cmp2</a>

        <ul>
            <li>
                <cmp-four></cmp-four>
            </li>
            <li>
                <cmp-five></cmp-five>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTwo implements OnInit, AfterViewChecked {

    @Input() notifier: Subject<any>;
    attached = false;

    constructor(private zone: NgZone, private el: ElementRef, private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.cd.detach();

        this.notifier.subscribe((attach) => {
            if (attach) {
                this.el.nativeElement.querySelector('a').classList.remove('detached');
                this.cd.reattach();
            } else {
                this.el.nativeElement.querySelector('a').classList.add('detached');
                this.cd.detach();
            }
        });
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
