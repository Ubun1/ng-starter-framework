import { NgStarterFrameworkPage } from './app.po';

describe('ng-starter-framework App', () => {
  let page: NgStarterFrameworkPage;

  beforeEach(() => {
    page = new NgStarterFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
