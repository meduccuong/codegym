import { Mp3Page } from './app.po';

describe('mp3 App', () => {
  let page: Mp3Page;

  beforeEach(() => {
    page = new Mp3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
