import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentEight} from './component-eight.component';

describe('Component: ComponentEight', () => {

    let fixture: ComponentFixture<ComponentEight>;
    let component: ComponentEight;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentEight],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentEight);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
