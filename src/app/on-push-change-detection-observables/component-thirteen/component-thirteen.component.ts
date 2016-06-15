import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-thirteen',
  template: `
    <a class="on-push">Cmp13</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentThirteen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
