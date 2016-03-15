import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {FooterComponent} from './footer.component';
import {HomeComponent} from '../public/components/home/home.component';
import {TeamComponent} from '../public/components/team/team.component';
import {AboutComponent} from '../public/components/about/about.component';

@Component({
  selector: 'sd-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, FooterComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/team', name: 'Team', component: TeamComponent },
  { path: '/about', name: 'About', component: AboutComponent }
])
export class AppComponent {}
