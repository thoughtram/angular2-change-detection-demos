import {Input, Component, NgZone, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {toggleClass} from '../../toggle-class.service';

@Component({
  selector: 'cmp-seventeen',
  template: `
    <a class="on-push subscriber">Cmp17</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSeventeen {

  @Input() model:Subject<any>;
  counter:number = 0;

  constructor(private zone: NgZone, private el: ElementRef, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.model.subscribe(() => {
      this.cd.markForCheck();
      toggleClass(this.el, this.zone, 'checked-observable');
    })
  }

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

