/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ComponentThreeComponent } from './component-three.component';

describe('Component: ComponentThree', () => {
  it('should create an instance', () => {
    let component = new ComponentThreeComponent();
    expect(component).toBeTruthy();
  });
});
