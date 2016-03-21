import {Component, provide} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {FooterComponent} from './footer.component';
import {HomeComponent} from '../public/components/home/home.component';
import {TeamComponent} from '../public/components/team/team.component';
import {AboutComponent} from '../public/components/about/about.component';
import {ContactComponent} from '../public/components/contact/contact.component';
import {ResetPasswordComponent} from '../public/components/reset-password/reset-password.component';
import {APP_CONFIG, CONFIG} from './app.config';

@Component({
    selector: 'op-app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    providers: [
        HTTP_PROVIDERS,
        provide(APP_CONFIG, {useValue: CONFIG})
    ],
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NavbarComponent, FooterComponent]
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/team', name: 'Team', component: TeamComponent },
    { path: '/about', name: 'About', component: AboutComponent },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/reset-password/:requestId', name: 'ResetPassword', component: ResetPasswordComponent }
])
export class AppComponent { }
