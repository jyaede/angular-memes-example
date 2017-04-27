import { AngularMemesExamplePage } from './app.po';

describe('angular-memes-example App', function() {
  let page: AngularMemesExamplePage;

  beforeEach(() => {
    page = new AngularMemesExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
