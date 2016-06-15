import {Component, NgZone, ElementRef} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-five',
  template: `
    <a>Cmp5</a>
  `
})
export class ComponentFive {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

