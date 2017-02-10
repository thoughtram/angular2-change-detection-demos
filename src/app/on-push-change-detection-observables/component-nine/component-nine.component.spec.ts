import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentNine} from './component-nine.component';

describe('Component: ComponentNine', () => {

    let fixture: ComponentFixture<ComponentNine>;
    let component: ComponentNine;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentNine],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentNine);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
