import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentSixteen} from './component-sixteen.component';

describe('Component: ComponentSixteen', () => {

    let fixture: ComponentFixture<ComponentSixteen>;
    let component: ComponentSixteen;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentSixteen]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentSixteen);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
