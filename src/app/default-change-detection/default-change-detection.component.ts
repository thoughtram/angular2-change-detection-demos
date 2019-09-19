import {Component, ViewChild} from '@angular/core';
import {ToggleStateService} from '../toggle-state.service';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-default-change-detection',
    templateUrl: 'default-change-detection.component.html',
    styleUrls: ['default-change-detection.component.css']
})
export class DefaultChangeDetectionComponent {

    @ViewChild('checkbox', {static: false}) checkbox;
    notifier: Subject<any>;
    runInterval: boolean;

    constructor(private toggleStateService: ToggleStateService) {
    }

    notifyInterval(runInterval) {
        this.toggleStateService.runInterval = runInterval;
        this.notifier.next(runInterval);
    }

}
