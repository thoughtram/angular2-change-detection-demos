export class CdDemosPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cd-demos-app h1')).getText();
  }
}
