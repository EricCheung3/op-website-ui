import {
    TestComponentBuilder,
    describe,
    expect,
    injectAsync,
    it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {ContactComponent} from './contact.component';

export function main() {
    describe('Contact component', () => {
        it('should work',
            injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                return tcb.createAsync(TestComponent)
                    .then((rootTC) => {
                        let contactDOMEl = rootTC.debugElement.children[0].nativeElement;

                        expect(DOM.querySelectorAll(contactDOMEl, 'h2')[0].textContent).toEqual('Contact Us');
                    });
            }));
    });
}

@Component({
    selector: 'test-cmp',
    directives: [ContactComponent],
    template: '<op-contact></op-contact>'
})
class TestComponent { }
