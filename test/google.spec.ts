import { browser } from 'protractor';

describe('Given a SDET learning protractor', () => {
  describe('when open Google Page', () => {
    beforeEach(async () => {
      browser.get('https://www.google.com');
    });

    it('then should have a title', async () => {
      expect(browser.getTitle()).toEqual('Google');
    });
  });
});
