import {Component, NgZone, ElementRef} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-seventeen',
  template: `
    <a>Cmp17</a>
  `
})
export class ComponentSeventeen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

