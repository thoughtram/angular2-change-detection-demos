/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ComponentTwoComponent } from './component-two.component';

describe('Component: ComponentTwo', () => {
  it('should create an instance', () => {
    let component = new ComponentTwoComponent();
    expect(component).toBeTruthy();
  });
});
