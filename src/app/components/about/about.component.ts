import {Component, Inject} from '@angular/core';
import {CommonComponent} from "../common/common.component";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: []
})
export class AboutComponent extends CommonComponent {

  infos: any[] = [];

  override ngOnInit() {
    super.ngOnInit();

    if (this.dataService.resume && this.dataService.resume.about) {
      let about = this.dataService.resume.about;

      if (about.email) {
        this.infos.push({
          name: 'Email',
          value: about.email
        })
      }

      if (about.phone) {
        this.infos.push({
          name: 'Phone',
          value: about.phone
        })
      }

      if (about.address) {
        this.infos.push({
          name: 'Address',
          value: about.address
        })
      }

      if (about.extras) {
        this.infos.push({
          name: 'Misc.',
          value: about.extras
        })
      }
    }
  }
}
