import {Component, Input, ViewChild} from '@angular/core';
import { CommonComponent } from '../common/common.component';
import {Certificate} from "../../interfaces/certificate";

@Component({
  selector: 'certificate',
  templateUrl: './certficate.component.html',
  styleUrls: ['./certficate.component.css'],
})
export class CertficateComponent extends CommonComponent {


  @Input()
  certificate: Certificate | null = null;

  @Input()
  index: number = 0;
  protected readonly Certificate = Certificate;
}
