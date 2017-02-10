import {CdDemosPage} from './app.po';

describe('cd-demos App', function () {
    let page: CdDemosPage;

    beforeEach(() => {
        page = new CdDemosPage();
    });

    it('should display message saying "Angular 2 Change Detection Demos"', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Angular 2 Change Detection Demos');
    });
});
