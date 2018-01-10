import { AngularProjectOnePage } from './app.po';

describe('angular-project-one App', () => {
  let page: AngularProjectOnePage;

  beforeEach(() => {
    page = new AngularProjectOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
