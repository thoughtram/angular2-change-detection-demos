import {ToggleStateService} from './toggle-state.service';
import {inject, TestBed} from '@angular/core/testing';

describe('ToggleState Service', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ToggleStateService
            ]
        });
    });

    it('should inject ToggleStateService', inject([ToggleStateService], (service) => {
        expect(service).toBeTruthy();
        expect(service.runInterval).toBeFalsy();
    }));

});
