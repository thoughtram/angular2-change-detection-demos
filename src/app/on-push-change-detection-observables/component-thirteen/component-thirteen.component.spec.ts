import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentThirteen} from './component-thirteen.component';

describe('Component: ComponentThirteen', () => {

    let fixture: ComponentFixture<ComponentThirteen>;
    let component: ComponentThirteen;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentThirteen]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentThirteen);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
