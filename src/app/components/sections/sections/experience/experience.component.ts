import { Component, Inject } from '@angular/core';
import {SectionComponent} from "../../section.component";
import {Constants} from "../../../../constants/constants";

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', '../../section.component.css']
})
export class ExperienceComponent extends SectionComponent {

  override name = Constants.EXPERIENCES;
}
