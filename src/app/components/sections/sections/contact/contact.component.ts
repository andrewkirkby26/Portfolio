import {Component, Inject} from '@angular/core';
import {SectionComponent} from "../../section.component";
import {Constants} from "../../../../constants/constants";

@Component({
  selector: 'contactSection',
  templateUrl: './contact.component.html',
  styleUrls: ['../../section.component.css', './contact.component.css']
})
export class ContactComponent extends SectionComponent {

  override name = Constants.CONTACT;

}
