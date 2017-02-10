import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentTen} from './component-ten.component';

describe('Component: ComponentTen', () => {

    let fixture: ComponentFixture<ComponentTen>;
    let component: ComponentTen;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentTen]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentTen);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
