import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-eleven',
  template: `
    <a class="on-push">Cmp11</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentEleven {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
