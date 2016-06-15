/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ComponentSevenComponent } from './component-seven.component';

describe('Component: ComponentSeven', () => {
  it('should create an instance', () => {
    let component = new ComponentSevenComponent();
    expect(component).toBeTruthy();
  });
});
