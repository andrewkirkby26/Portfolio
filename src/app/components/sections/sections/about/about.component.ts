import {Component, Inject} from '@angular/core';
import {SectionComponent} from "../../section.component";
import {Constants} from "../../../../constants/constants";

@Component({
  selector: 'aboutSection',
  templateUrl: './about.component.html',
  styleUrls: ['../../section.component.css', './about.component.css']
})
export class AboutSectionComponent extends SectionComponent {

  override name = Constants.ABOUT;


}
