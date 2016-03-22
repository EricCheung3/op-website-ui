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
    resetRequestUrl: string;
    apiHost: string;
    invalid = false;
    success = false;
    email: string;
    errorMessage: string;

    constructor (
        @Inject(APP_CONFIG) config:Config,
        private _router: Router,
        private _routeParams:RouteParams,
        private _http: Http) {
        this.apiHost = config.apiHost;
    }

    ngOnInit() {
        let id = this._routeParams.get('requestId');
        this.resetRequestUrl = this.apiHost + '/api/public/resetPasswordRequests/' + id;
        console.log('==>ResetPasswordComponent with id='+id);

        // check request valid
        this._http
            .get(this.resetRequestUrl, this.getRequestOptions())
            .subscribe(
                response => {
                    console.log('valid reset password request');
                    this.email = response.json().data.email;
                },
                error => {
                    this.invalid = true;
                }
            );
    }

    onSubmit() {
        // PUT to server
        let body = JSON.stringify(this.model);
        this._http
            .put(this.resetRequestUrl, body, this.getRequestOptions())
            .subscribe(
                data => {
                    console.log('successfully reset password, return data is:', data);
                    this.success = true;
                },
                error => {
                    console.error(error);
                    this.errorMessage = error; // TODO display error messages
                }
            );
    }

    private getRequestOptions() : RequestOptions {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}
