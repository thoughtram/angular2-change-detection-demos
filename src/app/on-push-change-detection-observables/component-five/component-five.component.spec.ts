import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentFive} from './component-five.component';

describe('Component: ComponentFive', () => {

    let fixture: ComponentFixture<ComponentFive>;
    let component: ComponentFive;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentFive],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentFive);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
