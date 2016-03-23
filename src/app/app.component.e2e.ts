describe('App', () => {

    beforeEach(() => {
        browser.get('');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('Openprice');
    });

    it('should have <nav>', () => {
        expect(element(by.css('op-app op-navbar nav')).isPresent()).toEqual(true);
    });

    it('should have correct nav text for Home', () => {
        expect(element(by.css('op-app op-navbar nav a:first-child')).getText()).toEqual('HOME');
    });

    it('should have correct nav text for Team', () => {
        expect(element(by.css('op-app op-navbar nav a:nth-child(2)')).getText()).toEqual('TEAM');
    });

    it('should have correct nav text for Contact', () => {
        expect(element(by.css('op-app op-navbar nav a:last-child')).getText()).toEqual('CONTACT');
    });

});
