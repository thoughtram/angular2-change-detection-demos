import {Component, NgZone, ElementRef} from '@angular/core';
import {ComponentFourteen} from '../component-fourteen';
import {ComponentFiveteen} from '../component-fiveteen';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-seven',
  template: `
    <a>Cmp7</a>

    <ul>
      <li><cmp-fourteen></cmp-fourteen></li>
      <li><cmp-fiveteen></cmp-fiveteen></li>
    </ul>
  `,
})
export class ComponentSeven {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
