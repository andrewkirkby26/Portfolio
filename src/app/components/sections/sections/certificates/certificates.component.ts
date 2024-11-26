import {Component, Inject} from '@angular/core';
import {SectionComponent} from "../../section.component";
import {Constants} from "../../../../constants/constants";

@Component({
  selector: 'certificatesSection',
  templateUrl: './certificates.component.html',
  styleUrls: ['../../section.component.css', './certificates.component.css']
})
export class CertificatesComponent extends SectionComponent {

  override name = Constants.CERTIFICATES;

}
