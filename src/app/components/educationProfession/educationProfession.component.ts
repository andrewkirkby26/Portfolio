import {Component, Input, ViewChild} from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'educationProfession',
  templateUrl: './educationProfession.component.html',
  styleUrls: ['./educationProfession.component.css'],
})
export class EducationProfessionComponent extends CommonComponent {


  @Input()
  experience: any | null = null;
  @Input()
  left = true;
}
