import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentSix} from './component-six.component';

describe('Component: ComponentSix', () => {

    let fixture: ComponentFixture<ComponentSix>;
    let component: ComponentSix;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentSix]
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
