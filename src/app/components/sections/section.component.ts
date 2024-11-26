import {Component, Inject, Input, ViewChild} from '@angular/core';
import { CommonComponent } from '../common/common.component';
import {Scroll} from "../../interfaces/scroll";

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent extends CommonComponent{

  @ViewChild('container')
  container!: HTMLElement;

  scroll: Scroll = new Scroll(0,0,0,0,0);
  lastPercentVisisbile = 0;
  name = '';
  @Input()
  value: string = '';

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    try {
      this.container = (this.container as any).nativeElement;
    } catch (e) {}

    this.addSubscription(this.eventService.scrollUpdate.subscribe((scroll) => {
      this.scroll = scroll;
      this.handleScroll();
    }))
  }

  handleScroll() {
    try {
      let val = this.calcPercentVisible(this.container);
      this.percentVisible = Math.min(val, 1);
      if (val >= 1 && this.lastPercentVisisbile < 1) {
        this.eventService.scrollOptionSelect.emit(this.name);
      } else if (val < 1 && this.lastPercentVisisbile >= 1) {
        this.eventService.scrollOptionSelect.emit(this.name);
      }

      this.lastPercentVisisbile = val;
    } catch (e) {}
  }
}
