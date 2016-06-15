/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ComponentFiveComponent } from './component-five.component';

describe('Component: ComponentFive', () => {
  it('should create an instance', () => {
    let component = new ComponentFiveComponent();
    expect(component).toBeTruthy();
  });
});
