import { Component, OnInit, ViewChild,  } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { ToggleStateService } from '../toggle-state.service';
import { ComponentOne } from './component-one';

@Component({
  moduleId: module.id,
  selector: 'app-default-change-detection',
  templateUrl: 'default-change-detection.component.html',
  styleUrls: ['default-change-detection.component.css'],
  directives: [ComponentOne]
})
export class DefaultChangeDetectionComponent {

  @ViewChild('checkbox') checkbox;
  notifier:Subject<any>;
  runInterval:boolean;

  constructor(private toggleStateService: ToggleStateService) {}

  notifyInterval(runInterval) {
    this.toggleStateService.runInterval = runInterval;
    this.notifier.next(runInterval)
  }

}
