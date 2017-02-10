import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentTwo} from './component-two.component';

describe('Component: ComponentTwo', () => {

    let fixture: ComponentFixture<ComponentTwo>;
    let component: ComponentTwo;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentTwo],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentTwo);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
