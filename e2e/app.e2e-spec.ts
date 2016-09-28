import { OctoTestWebPage } from './app.po';

describe('octo-test-web App', function() {
  let page: OctoTestWebPage;

  beforeEach(() => {
    page = new OctoTestWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
