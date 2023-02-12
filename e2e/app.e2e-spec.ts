import { ServicePage } from './app.po';

describe('service App', () => {
  let page: ServicePage;

  beforeEach(() => {
    page = new ServicePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
