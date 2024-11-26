import {Component, Input, ViewChild} from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent extends CommonComponent {


  @Input()
  project: any | null = null;
}
