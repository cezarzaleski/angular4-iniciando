import { Angular4IniciandoPage } from './app.po';

describe('angular4-iniciando App', () => {
  let page: Angular4IniciandoPage;

  beforeEach(() => {
    page = new Angular4IniciandoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
