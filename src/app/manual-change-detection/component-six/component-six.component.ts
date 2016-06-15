import {Component, NgZone, ElementRef} from '@angular/core';
import {ComponentTwelve} from '../component-twelve';
import {ComponentThirteen} from '../component-thirteen';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-six',
  template: `
    <a>Cmp6</a>

    <ul>
      <li><cmp-twelve></cmp-twelve></li>
      <li><cmp-thirteen></cmp-thirteen></li>
    </ul>
  `,
  directives: [ComponentTwelve, ComponentThirteen]
})
export class ComponentSix {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}


