import { AppPage } from './app.po';
import * as should from 'should';

describe('hello-world-ng App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.getParagraphText().should.equal('Welcome to app!');
  });
});
