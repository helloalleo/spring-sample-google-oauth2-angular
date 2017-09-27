import { SampleGoogleAuthPage } from './app.po';

describe('sample-google-auth App', function() {
  let page: SampleGoogleAuthPage;

  beforeEach(() => {
    page = new SampleGoogleAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
