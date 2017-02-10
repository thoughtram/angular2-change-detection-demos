import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentFourteen} from './component-fourteen.component';

describe('Component: ComponentFourteen', () => {

    let fixture: ComponentFixture<ComponentFourteen>;
    let component: ComponentFourteen;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentFourteen]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentFourteen);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
