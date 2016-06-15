/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ComponentOneComponent } from './component-one.component';

describe('Component: ComponentOne', () => {
  it('should create an instance', () => {
    let component = new ComponentOneComponent();
    expect(component).toBeTruthy();
  });
});
