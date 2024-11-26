import {Component, Inject} from '@angular/core';
import {SectionComponent} from "../../section.component";
import {Constants} from "../../../../constants/constants";

@Component({
  selector: 'projectSection',
  templateUrl: './projects.component.html',
  styleUrls: ['../../section.component.css', './projects.component.css']
})
export class ProjectsComponent extends SectionComponent {

  override name = Constants.PROJECTS;

}
