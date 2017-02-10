import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentFour} from './component-four.component';

describe('Component: ComponentFour', () => {

    let fixture: ComponentFixture<ComponentFour>;
    let component: ComponentFour;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentFour],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentFour);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
