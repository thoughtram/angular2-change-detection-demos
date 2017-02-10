import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ManualChangeDetectionComponent} from './manual-change-detection.component';

describe('Component: ManualChangeDetection', () => {

    let fixture: ComponentFixture<ManualChangeDetectionComponent>;
    let component: ManualChangeDetectionComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManualChangeDetectionComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManualChangeDetectionComponent);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
