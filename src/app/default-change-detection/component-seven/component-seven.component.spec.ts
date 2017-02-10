import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentSeven} from './component-seven.component';

describe('Component: ComponentSeven', () => {

    let fixture: ComponentFixture<ComponentSeven>;
    let component: ComponentSeven;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentSeven]
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
