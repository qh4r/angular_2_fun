import { AngularFirstPage } from './app.po';

describe('angular-first App', function() {
  let page: AngularFirstPage;

  beforeEach(() => {
    page = new AngularFirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
