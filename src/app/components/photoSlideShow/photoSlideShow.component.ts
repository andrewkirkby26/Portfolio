import {Component, Input, ViewChild, ViewChildren} from '@angular/core';
import { CommonComponent } from '../common/common.component';
import {Certificate} from "../../interfaces/certificate";
import {doc} from "firebase/firestore";

@Component({
  selector: 'photoSlideShow',
  templateUrl: './photoSlideShow.component.html',
  styleUrls: ['./photoSlideShow.component.css'],
})
export class PhotoSlideShowComponent extends CommonComponent {

  @Input()
  media: string[] = [];

  @Input()
  visibleAtATime = 1;

  selectImage(index: number) {
    this.navigationService.selectSlideShow(this.media, index);
  }

  videosExtensions = ['MOV', 'MP4'];
  photosExtensions = ['PNG', 'IMG', 'JPG', 'JPEG'];

  isPhoto(url: string) {
    let rVal = false;
    try {
      let arr = url.split('.');
      let extension = arr[arr.length - 1];
      rVal = this.photosExtensions.includes(extension.toLocaleUpperCase())
    } catch (e) {

    }
    return rVal;
  }

  isVideo(url: string) {
    let rVal = false;
    try {
      let arr = url.split('.');
      let extension = arr[arr.length - 1];
      rVal = this.videosExtensions.includes(extension.toLocaleUpperCase())
    } catch (e) {

    }
    return rVal;
  }
}
