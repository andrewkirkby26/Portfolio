import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { timeStamp } from 'console';
import { NavigationService } from 'src/app/services/navigation.service';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {Utils} from 'src/app/utils/utils';
import { EventService } from 'src/app/services/event.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataCacheService } from 'src/app/services/dataHolderService';
import { Constants } from 'src/app/constants/constants';
import { Subscription } from 'rxjs';
import { ColorSchemeService } from 'src/app/services/colorsScheme.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {DataService} from "../../services/data.service";
import {Social} from "../../interfaces/social";
import {FirestoreService} from "../../firebase/firestore.service";
import {StorageService} from "../../firebase/storage.service";
import {SiteEventService} from "../../services/siteEvents.service";


@Component({
  selector: 'common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit{
  environment = environment;
  Constants = Constants;
  Math = Math;
  pollRate = 1000;
  Utils = Utils;
  DESTROYED = false;
  numberOfPolls = 0;
  subscriptions: Subscription[] = [];
  @Input()
  pid = Utils.createDomId(16);
  pollTimerId: any | null = null;
  @Input()
  shouldPollBase = true;
  percentVisible = 0;
  entirePercentScroll = 0;
  protected readonly Social = Social;

  constructor(public http: HttpClient, public authenticationService: AuthenticationService, public navigationService: NavigationService, public utils: Utils, public eventService: EventService,
    public sanitizer: DomSanitizer, public router: Router, public dataCache: DataCacheService,  public colorSchemeService: ColorSchemeService, public formBuilder: FormBuilder, public firestoreService: FirestoreService,
              public storageService: StorageService, public dataService: DataService, public siteEventService: SiteEventService) {


  }
  ngAfterViewInit(): void {

  }

  ngOnDestroy() {
    this.DESTROYED = true;
    clearTimeout(this.pollTimerId);
    this.subscriptions.forEach(function (subscription) {
      try {
          subscription.unsubscribe();
      } catch (e) {

      }
    })
  }

  //To be overriden where needed
  ngOnChanges(changes: SimpleChanges) {

  }

  addSubscription(sub: Subscription) {
    this.subscriptions.push(sub);
  }

  //To be overriden where needed
  ngOnInit() {
    this.handleOverflowScroll();
  }

  handleOverflowScroll() {

  }

  poll() {
    if (!this.DESTROYED && this.shouldPollBase) {
      this.numberOfPolls++;
      try {
        this.cycleOnce();
      } catch (e) {

      }

      let temp = this;
      this.pollTimerId = setTimeout(function() {
        temp.poll();
      },this.pollRate);
    }
  }

  calcPercentVisible(elem: any | null): number {
    let rVal = 0;
    if (elem) {
      let parentID = this.navigationService.screenSize == Constants.SCREEN_SIZE_LARGE ? 'section_wrapper' : 'entireApp';
      try {
        elem = elem as HTMLElement;
        let top = elem.offsetTop!;
        let parent = elem.parentElement;
        let found = false;
        let limit = 12;
        let i = 0;
        while (!found) {
          i++;
          try {
            top += parent!.offsetTop;
            parent = parent!.parentElement;
          } catch (e) {

          }
          found = parent.id == parentID;
          if (i > limit) {
            found = true;
          }
        }
        try {
          top += parent!.offsetTop;
        } catch (e) {

        }
        let parentTop = parent!.scrollTop;
        let parentHeight = parent!.offsetHeight;
        let parentBottom = parentTop + parentHeight;
        let max =  parentBottom - top;
        rVal = (max / parentHeight);
      } catch (e) {
      }
    }

    rVal = rVal * 2.5;
    rVal = Math.max(0, rVal);
    rVal = Math.min(1, rVal);
    return rVal;
  }

  //To be oberriden where needed
  cycleOnce() {
    this.shouldPollBase = false;
  }

  getVerticalAnimation(percent: number | null = null) {
    let offset = 8;
    percent = Math.min(2, percent != null ? percent : this.percentVisible);
    return {
      transform: 'translateY(' + (offset - (percent * offset)) + 'rem)',
      opacity: Math.min(1, percent + .2)
    };
  }

  getLeftAnimation(percent: number | null = null) {
    let offset = 4;
    percent = Math.min(2, percent != null ? percent : this.percentVisible);
    return {
      transform: 'translateX(-' + (offset - (percent * offset)) + 'rem)',
      opacity: Math.min(1, percent + .2)
    };
  }

  getRightAnimation(percent: number | null = null) {
    let offset = 4;
    percent = Math.min(2, percent != null ? percent : this.percentVisible);
    return {
      transform: 'translateX(' + (offset - (percent * offset)) + 'rem)',
      opacity: Math.min(1, percent + .2)
    };
  }

  getScaleAnimation(percent: number | null = null) {
    percent = Math.min(2, percent != null ? percent : this.percentVisible) ;
    let temp =  this.getVerticalAnimation(percent);
    percent = percent * 1.4;
    temp.transform = temp.transform + ' scale(' + Math.min(1, Math.max(.5, percent)) + ')';
    return temp;
  }

  getOpacityAnimation(percent: number | null = null) {
    percent = Math.min(2, percent != null ? percent : this.percentVisible);
    return {
      opacity: Math.min(1, percent + .2)
    };
  }
}
