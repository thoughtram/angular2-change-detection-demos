import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-twelve',
  template: `
    <a class="on-push">Cmp12</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTwelve {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

  triggerChangeDetection() {
  }
}
