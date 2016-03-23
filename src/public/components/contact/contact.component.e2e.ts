describe('Contact', () => {

    beforeEach(() => {
        browser.get('contact');
    });

    it('should have correct feature heading', () => {
        expect(element(by.css('op-app op-contact h2.title')).getText())
            .toEqual('Contact Us');
    });
});
