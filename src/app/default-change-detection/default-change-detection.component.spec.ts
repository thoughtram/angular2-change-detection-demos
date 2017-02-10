import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DefaultChangeDetectionComponent} from './default-change-detection.component';
import {ToggleStateService} from '../toggle-state.service';

class ToggleStateServiceMock {
}

describe('Component: DefaultChangeDetection', () => {

    let fixture: ComponentFixture<DefaultChangeDetectionComponent>;
    let component: DefaultChangeDetectionComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DefaultChangeDetectionComponent],
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
        fixture = TestBed.createComponent(DefaultChangeDetectionComponent);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
