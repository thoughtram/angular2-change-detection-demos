import {Component, Input, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ComponentFourteen} from '../component-fourteen';
import {ComponentFiveteen} from '../component-fiveteen';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-seven',
  host: {
    '(click)':'emitAndTriggerChangeDetection()'
  },
  template: `
    <a class="on-push click-me">Cmp7</a>

    <ul>
      <li><cmp-fourteen></cmp-fourteen></li>
      <li><cmp-fiveteen></cmp-fiveteen></li>
    </ul>
  `,
  directives: [ComponentFourteen, ComponentFiveteen],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSeven {

  @Input() model:Subject<any>;

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

  emitAndTriggerChangeDetection() {
    this.model.next(null);
  }
}
