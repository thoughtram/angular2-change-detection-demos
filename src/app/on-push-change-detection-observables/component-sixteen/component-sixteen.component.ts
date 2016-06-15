import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-sixteen',
  template: `
    <a class="on-push">Cmp16</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSixteen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

  triggerChangeDetection() {}
}
