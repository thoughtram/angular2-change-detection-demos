import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CdDemosAppComponent} from './cd-demos.component';

describe('App: CdDemos', () => {

    let fixture: ComponentFixture<CdDemosAppComponent>;
    let component: CdDemosAppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CdDemosAppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CdDemosAppComponent);
        component = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

});
