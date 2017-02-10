import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OnPushChangeDetectionComponent} from './on-push-change-detection.component';
import {ToggleStateService} from '../toggle-state.service';

class ToggleStateServiceMock {
}

describe('Component: OnPushChangeDetection', () => {

    let fixture: ComponentFixture<OnPushChangeDetectionComponent>;
    let component: OnPushChangeDetectionComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OnPushChangeDetectionComponent],
            providers: [
                {
                    provide: ToggleStateService,
                    useClass: ToggleStateServiceMock
                }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OnPushChangeDetectionComponent);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
