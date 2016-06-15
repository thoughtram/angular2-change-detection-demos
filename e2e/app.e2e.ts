import { CdDemosPage } from './app.po';

describe('cd-demos App', function() {
  let page: CdDemosPage;

  beforeEach(() => {
    page = new CdDemosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cd-demos works!');
  });
});
