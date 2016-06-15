import {Component, NgZone, ElementRef} from '@angular/core';
import {ComponentTwo} from '../component-two';
import {ComponentThree} from '../component-three';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-one',
  template: `
    <a>Cmp1</a>

    <ul>
      <li><cmp-two></cmp-two></li>
      <li><cmp-three></cmp-three></li>
    </ul>
  `,
  directives: [ComponentTwo, ComponentThree]
})
export class ComponentOne {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
