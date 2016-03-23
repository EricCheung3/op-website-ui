describe('Home', () => {

    beforeEach(() => {
        browser.get('');
    });

    it('should have correct promo heading', () => {
        expect(element(by.css('op-app op-home .promo h2')).getText())
            .toEqual('The perfect shopping companion');
    });
});
