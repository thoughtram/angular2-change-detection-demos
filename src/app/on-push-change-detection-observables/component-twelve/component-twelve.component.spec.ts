import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentTwelve} from './component-twelve.component';

describe('Component: ComponentTwelve', () => {

    let fixture: ComponentFixture<ComponentTwelve>;
    let component: ComponentTwelve;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentTwelve]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentTwelve);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
