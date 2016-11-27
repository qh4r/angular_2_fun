import { browser, element, by } from 'protractor';

export class CookBookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cb-root h1')).getText();
  }
}
