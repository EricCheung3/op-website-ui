describe('About', () => {

    beforeEach(() => {
        browser.get('about');
    });

    it('should have correct feature heading', () => {
        expect(element(by.css('op-app op-about h2')).getText())
            .toEqual('ABOUT OPENPRICE');
    });
});
