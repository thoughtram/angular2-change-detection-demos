import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentThree} from './component-three.component';

describe('Component: ComponentThree', () => {

    let fixture: ComponentFixture<ComponentThree>;
    let component: ComponentThree;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentThree],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentThree);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
