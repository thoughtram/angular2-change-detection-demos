import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-fiveteen',
  template: `
    <a class="on-push">Cmp15</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentFiveteen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
