import {Input, Component, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ComponentSeventeen} from '../component-seventeen';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-nine',
  template: `
    <a class="on-push">Cmp9</a>

    <ul>
      <li><cmp-seventeen [model]="model"></cmp-seventeen></li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentNine {

  @Input() model:Subject<any>;

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
