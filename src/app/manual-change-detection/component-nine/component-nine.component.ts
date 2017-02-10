import {Component, NgZone, ElementRef} from '@angular/core';
import {ComponentSeventeen} from '../component-seventeen';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-nine',
  template: `
    <a>Cmp9</a>

    <ul>
      <li><cmp-seventeen></cmp-seventeen></li>
    </ul>
  `,
})
export class ComponentNine {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
