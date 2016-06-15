/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ComponentSixComponent } from './component-six.component';

describe('Component: ComponentSix', () => {
  it('should create an instance', () => {
    let component = new ComponentSixComponent();
    expect(component).toBeTruthy();
  });
});
