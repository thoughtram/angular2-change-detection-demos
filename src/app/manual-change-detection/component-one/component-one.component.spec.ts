import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentOne} from './component-one.component';

describe('Component: ComponentOne', () => {

    let fixture: ComponentFixture<ComponentOne>;
    let component: ComponentOne;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentOne],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentOne);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
