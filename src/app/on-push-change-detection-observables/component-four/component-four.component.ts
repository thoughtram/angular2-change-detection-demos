import {Input, Component, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ComponentEight} from '../component-eight';
import {ComponentNine} from '../component-nine';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-four',
  template: `
    <a class="on-push">Cmp4</a>

    <ul>
      <li><cmp-eight></cmp-eight></li>
      <li><cmp-nine [model]="model"></cmp-nine></li>
    </ul>
  `,
  directives: [ComponentEight, ComponentNine],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentFour {

  @Input() model:Subject<any>;

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

  triggerChangeDetection () { }
}

