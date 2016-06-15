import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {toggleClass} from '../..//toggle-class.service';

@Component({
  selector: 'cmp-fourteen',
  template: `
    <a class="on-push">Cmp14</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentFourteen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
