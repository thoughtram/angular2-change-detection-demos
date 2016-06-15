import {Component, NgZone, ElementRef} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-ten',
  host: {
    '(click)': 'triggerChangeDetection()'
  },
  template: `
    <a class="click-me">Cmp10</a>
  `
})
export class ComponentTen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

  triggerChangeDetection () { }
}
