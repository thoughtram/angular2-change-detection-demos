import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentSix} from './component-six.component';

describe('Component: ComponentSix', () => {

    let fixture: ComponentFixture<ComponentSix>;
    let component: ComponentSix;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentSix],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentSix);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
