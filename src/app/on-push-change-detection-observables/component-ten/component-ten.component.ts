import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {toggleClass} from '../..//toggle-class.service';

@Component({
  selector: 'cmp-ten',
  template: `
    <a class="on-push">Cmp10</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

  triggerChangeDetection () { }
}
