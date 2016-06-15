import {Input, Component, NgZone, ElementRef, ChangeDetectionStrategy, ViewChildren} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ComponentFour} from '../component-four';
import {ComponentFive} from '../component-five';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-two',
  template: `
    <a class="on-push">Cmp2</a>

    <ul>
      <li><cmp-four [model]="model"></cmp-four></li>
      <li><cmp-five></cmp-five></li>
    </ul>
  `,
  directives: [ComponentFour, ComponentFive],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTwo {

  @Input() model:Subject<any>;

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

