/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ToggleStateService } from './toggle-state.service';

describe('ToggleState Service', () => {
  beforeEachProviders(() => [ToggleStateService]);

  it('should ...',
      inject([ToggleStateService], (service: ToggleStateService) => {
    expect(service).toBeTruthy();
  }));
});
