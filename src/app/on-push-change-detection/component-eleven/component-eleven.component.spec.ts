import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentEleven} from './component-eleven.component';

describe('Component: ComponentEleven', () => {

    let fixture: ComponentFixture<ComponentEleven>;
    let component: ComponentEleven;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentEleven]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentEleven);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
