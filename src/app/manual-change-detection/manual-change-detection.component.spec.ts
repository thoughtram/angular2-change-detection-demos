/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ManualChangeDetectionComponent } from './manual-change-detection.component';

describe('Component: ManualChangeDetection', () => {
  it('should create an instance', () => {
    let component = new ManualChangeDetectionComponent();
    expect(component).toBeTruthy();
  });
});
