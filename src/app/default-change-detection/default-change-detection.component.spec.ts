/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DefaultChangeDetectionComponent } from './default-change-detection.component';

describe('Component: DefaultChangeDetection', () => {
  it('should create an instance', () => {
    let component = new DefaultChangeDetectionComponent();
    expect(component).toBeTruthy();
  });
});
