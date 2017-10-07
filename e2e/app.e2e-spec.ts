import { TuEmbajadaFePage } from './app.po';

describe('tu-embajada-fe App', () => {
  let page: TuEmbajadaFePage;

  beforeEach(() => {
    page = new TuEmbajadaFePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
