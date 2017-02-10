import {Component, NgZone, ElementRef, Input} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ComponentTwo} from '../component-two';
import {ComponentThree} from '../component-three';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-one',
  template: `
    <a>Cmp1</a>

    <ul>
      <li><cmp-two [notifier]="notifier"></cmp-two></li>
      <li><cmp-three></cmp-three></li>
    </ul>
  `,
})
export class ComponentOne {

  @Input() notifier:Subject<any>;

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
