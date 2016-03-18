import {Component} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component';

@Component({
  selector: 'op-contact',
  moduleId: module.id,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  directives: [ContactFormComponent]
})
export class ContactComponent {

}
