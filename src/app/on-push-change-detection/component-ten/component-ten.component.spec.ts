/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ComponentTenComponent } from './component-ten.component';

describe('Component: ComponentTen', () => {
  it('should create an instance', () => {
    let component = new ComponentTenComponent();
    expect(component).toBeTruthy();
  });
});
