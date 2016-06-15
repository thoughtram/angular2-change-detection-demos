import {Component, NgZone, ElementRef, ChangeDetectionStrategy, ViewChildren, ChangeDetectorRef} from '@angular/core';
import {ComponentFour} from '../component-four';
import {ComponentFive} from '../component-five';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-two',
  template: `
    <a class="on-push">Cmp2</a>

    <ul>
      <li><cmp-four></cmp-four></li>
      <li><cmp-five></cmp-five></li>
    </ul>
  `,
  directives: [ComponentFour, ComponentFive],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTwo {

  counter:number = 0;

  constructor(private zone: NgZone, private el: ElementRef, private cd:ChangeDetectorRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

