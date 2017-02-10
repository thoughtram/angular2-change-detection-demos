import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentSeven} from './component-seven.component';

describe('Component: ComponentSeven', () => {

    let fixture: ComponentFixture<ComponentSeven>;
    let component: ComponentSeven;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentSeven],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentSeven);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
