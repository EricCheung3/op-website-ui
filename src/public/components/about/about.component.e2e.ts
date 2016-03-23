describe('About', () => {

    beforeEach(() => {
        browser.get('about');
    });

    xit('should have correct feature heading', () => {
        pending('will enable after we put About page into website');

        expect(element(by.css('op-app op-about h2')).getText())
            .toEqual('ABOUT OPENPRICE');
    });
});
