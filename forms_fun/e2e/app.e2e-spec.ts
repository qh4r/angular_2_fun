import { FormsFunPage } from './app.po';

describe('forms-fun App', function() {
  let page: FormsFunPage;

  beforeEach(() => {
    page = new FormsFunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fm works!');
  });
});
