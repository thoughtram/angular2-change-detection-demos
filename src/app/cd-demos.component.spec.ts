import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CdDemosAppComponent } from '../app/cd-demos.component';

beforeEachProviders(() => [CdDemosAppComponent]);

describe('App: CdDemos', () => {
  it('should create the app',
      inject([CdDemosAppComponent], (app: CdDemosAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cd-demos works!\'',
      inject([CdDemosAppComponent], (app: CdDemosAppComponent) => {
    expect(app.title).toEqual('cd-demos works!');
  }));
});
