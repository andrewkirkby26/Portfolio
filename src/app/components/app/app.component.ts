import {Component, ViewChild} from '@angular/core';
import { CommonComponent } from '../common/common.component';
import {Scroll} from "../../interfaces/scroll";
import {animate, style, transition, trigger} from "@angular/animations";
import {Constants} from "../../constants/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      trigger('fade', [
        transition(':enter', [ // using status here for transition
          style({ opacity: 0 }),
          animate(500, style({ opacity: 1 }))
        ]),
        transition(':leave', [
          animate(500, style({ opacity: 0 }))
        ])
      ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ bottom: '-3rem' }),
        animate(250, style({bottom: '2rem'}))
      ]) ,
      transition(':leave', [
        style({ bottom: '2rem' }),
        animate(250, style({ bottom: '-2rem'}))
      ])
    ])
  ]
})
export class AppComponent extends CommonComponent {

  @ViewChild('entire')
  entire!: HTMLElement;
  @ViewChild('section_wrapper')
  sectionWrapper!: HTMLElement;
  initialized = false;

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    this.entire = (this.entire as any).nativeElement;
    this.sectionWrapper = (this.sectionWrapper as any).nativeElement;

    this.addSubscription(this.eventService.sectionSelected.subscribe(resp => {
      this.selectOption(this.navigationService.currentSection)
    }))


    this.entire.addEventListener('scroll', () => {
      if (this.navigationService.screenSize == Constants.SCREEN_SIZE_SMALL) {
        let top = this.entire.scrollTop;
        let height = this.entire.offsetHeight;
        let maxHeight = this.entire.scrollHeight;
        if (top <= 50 && !this.navigationService.ignoreScroll) {
          this.eventService.scrollOptionSelect.emit(Constants.HOME)
        }
        let bottom = top + height;
        this.entirePercentScroll = (top / (maxHeight - height));
        this.eventService.scrollUpdate.emit(new Scroll(maxHeight, height, top, this.entirePercentScroll, bottom));
      }
    })

    this.sectionWrapper.addEventListener('scroll', () => {
      if (this.navigationService.screenSize == Constants.SCREEN_SIZE_LARGE) {
        let top = this.sectionWrapper.scrollTop;
        let height = this.sectionWrapper.offsetHeight;
        let maxHeight = this.sectionWrapper.scrollHeight;
        if (top <= 50 && !this.navigationService.ignoreScroll) {
          this.eventService.scrollOptionSelect.emit(Constants.HOME)
        }
        let bottom = top + height;
        this.entirePercentScroll = (top / (maxHeight - height));
        this.eventService.scrollUpdate.emit(new Scroll(maxHeight, height, top, this.entirePercentScroll, bottom));
      }
    })

    this.initialized = true;
  }

  selectOption(option: any) {
    this.navigationService.ignoreScroll = true;
    try {
      document.getElementById(option.name)?.scrollIntoView({behavior: 'smooth', block: 'start'})
    } catch (e) {
    }

    setTimeout(() => {
      this.navigationService.ignoreScroll = false;
    }, 600);
  }
}
