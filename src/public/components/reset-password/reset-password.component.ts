import {Component, Inject} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {RouteParams, Router} from 'angular2/router';
import {Alert} from 'ng2-bootstrap/components/alert';
import {Reset} from './reset';
import {APP_CONFIG, Config} from '../../../app/app.config';

@Component({
    selector: 'op-reset-password',
    moduleId: module.id,
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css'],
    directives: [Alert]
})
export class ResetPasswordComponent {
    model = new Reset('', '');
    submitted = false;
    active = true;
    alertMessage = '';
    putResetUrl: string;
    apiHost: string;

    constructor (
        @Inject(APP_CONFIG) config:Config,
        private _router: Router,
        private _routeParams:RouteParams,
        private _http: Http) {
        this.apiHost = config.apiHost;
    }

    ngOnInit() {
        let id = this._routeParams.get('requestId');
        this.putResetUrl = this.apiHost + '/api/public/resetPasswordRequests/' + id;
        console.log('==>ResetPasswordComponent with id='+id);
    }

    onSubmit() {
        this.submitted = false;

        // POST to server
        let body = JSON.stringify(this.model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this._http
            .post(this.putResetUrl, body, options)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertMessage = 'Your message was received, and we will response as soon as possible.';
                },
                error => console.error(error)
            );

    }
}
