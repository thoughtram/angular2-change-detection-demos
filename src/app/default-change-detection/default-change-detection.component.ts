import {Component, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {ToggleStateService} from '../toggle-state.service';

@Component({
    selector: 'app-default-change-detection',
    templateUrl: 'default-change-detection.component.html',
    styleUrls: ['default-change-detection.component.css']
})
export class DefaultChangeDetectionComponent {

    @ViewChild('checkbox') checkbox;
    notifier: Subject<any>;
    runInterval: boolean;

    constructor(private toggleStateService: ToggleStateService) {
    }

    notifyInterval(runInterval) {
        this.toggleStateService.runInterval = runInterval;
        this.notifier.next(runInterval);
    }

}
