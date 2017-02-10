import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentSeventeen} from './component-seventeen.component';

describe('Component: ComponentSeventeen', () => {

    let fixture: ComponentFixture<ComponentSeventeen>;
    let component: ComponentSeventeen;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentSeventeen]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentSeventeen);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
