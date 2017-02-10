import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentFiveteen} from './component-fiveteen.component';

describe('Component: ComponentFiveteen', () => {

    let fixture: ComponentFixture<ComponentFiveteen>;
    let component: ComponentFiveteen;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentFiveteen]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentFiveteen);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

});
