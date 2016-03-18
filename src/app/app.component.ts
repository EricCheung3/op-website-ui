import {Component} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {FooterComponent} from './footer.component';
import {HomeComponent} from '../public/components/home/home.component';
import {TeamComponent} from '../public/components/team/team.component';
import {ContactComponent} from '../public/components/contact/contact.component';

@Component({
  selector: 'sd-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
  providers: [HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, NavbarComponent, FooterComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/team', name: 'Team', component: TeamComponent },
  { path: '/contact', name: 'Contact', component: ContactComponent }
])
export class AppComponent {}
