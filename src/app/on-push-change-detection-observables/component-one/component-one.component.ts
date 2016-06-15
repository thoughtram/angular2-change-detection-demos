import {Input, Component, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ComponentTwo} from '../component-two';
import {ComponentThree} from '../component-three';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-one',
  template: `
    <a class="on-push">Cmp1</a>

    <ul>
      <li><cmp-two [model]="model"></cmp-two></li>
      <li><cmp-three [model]="model"></cmp-three></li>
    </ul>
  `,
  directives: [ComponentTwo, ComponentThree],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentOne {

  @Input() model:Subject<any>;

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
