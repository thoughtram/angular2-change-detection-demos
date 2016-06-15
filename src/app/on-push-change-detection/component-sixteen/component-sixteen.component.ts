import {Component, NgZone, ElementRef} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-sixteen',
  host: {
    '(click)': 'triggerChangeDetection()'
  },
  template: `
    <a class="click-me">Cmp16</a>
  `
})
export class ComponentSixteen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

  triggerChangeDetection() {}
}
