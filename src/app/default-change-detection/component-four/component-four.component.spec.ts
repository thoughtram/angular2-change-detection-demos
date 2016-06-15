/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ComponentFourComponent } from './component-four.component';

describe('Component: ComponentFour', () => {
  it('should create an instance', () => {
    let component = new ComponentFourComponent();
    expect(component).toBeTruthy();
  });
});
