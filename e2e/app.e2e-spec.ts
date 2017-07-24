import { CustomDirectivePage } from './app.po';

describe('custom-directive App', () => {
  let page: CustomDirectivePage;

  beforeEach(() => {
    page = new CustomDirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
