import {Input, Component, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ComponentSix} from '../component-six';
import {ComponentSeven} from '../component-seven';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-three',
  template: `
    <a class="on-push">Cmp3</a>

    <ul>
      <li><cmp-six></cmp-six></li>
      <li><cmp-seven [model]="model"></cmp-seven></li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentThree {

  @Input() model:Subject<any>;

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
