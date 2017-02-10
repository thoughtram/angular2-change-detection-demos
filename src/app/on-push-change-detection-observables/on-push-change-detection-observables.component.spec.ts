import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OnPushChangeDetectionObservablesComponent} from './on-push-change-detection-observables.component';

describe('Component: OnPushChangeDetectionObservables', () => {

    let fixture: ComponentFixture<OnPushChangeDetectionObservablesComponent>;
    let component: OnPushChangeDetectionObservablesComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OnPushChangeDetectionObservablesComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OnPushChangeDetectionObservablesComponent);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
