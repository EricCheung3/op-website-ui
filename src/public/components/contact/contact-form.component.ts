import {Component} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
import {Contact} from './contact';

@Component({
    selector: 'op-contact-form',
    templateUrl: 'public/components/contact/contact-form.component.html',
    styleUrls: ['public/components/contact/contact.component.css'],
    directives: [Alert]
})
export class ContactFormComponent {
    model = new Contact('', '', '');
    submitted = false;
    active = true;
    alertMessage = '';

    constructor (private http: Http) {}

    onSubmitMessage() {
        console.log('submit contact message ' + this.diagnostic);
        this.submitted = false;

        // POST to server
        let url = 'https://dev-api.theopenprice.com/api/public/contact';
        let body = JSON.stringify(this.model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http
            .post(url, body, options)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertMessage = 'Your message was received, and we will response as soon as possible.';
                },
                error => console.error(error)
            );

        this.model = new Contact('', '', '');
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }

    get diagnostic() { return JSON.stringify(this.model); }
}
