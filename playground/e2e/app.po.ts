import { browser, element, by } from 'protractor';

export class PlaygroundPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pg-root h1')).getText();
  }
}
