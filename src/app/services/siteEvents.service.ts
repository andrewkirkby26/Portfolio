import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { NavigationService } from './navigation.service';
import { Observable, of } from 'rxjs';
import { Button } from 'src/app/interfaces/button';
import { domainToASCII } from 'url';
import { catchError } from 'rxjs/internal/operators/catchError';
import {Project} from "../interfaces/project";
import {Social} from "../interfaces/social";
import {Trait} from "../interfaces/trait";
import {ClientResume} from "../../environments/clientResume";
import {Resume} from "../interfaces/resume";
import {Utils} from "../utils/utils";
import {FirestoreService} from "../firebase/firestore.service";
import {Constants} from "../constants/constants";

@Injectable({
  providedIn: 'root',
})
export class SiteEventService{

  constructor(public httpUtil: HttpClient, public firestoreService: FirestoreService) {
    if (environment.production) {
      this.saveEvent(Constants.EVENT_PAGE_LOADED);
    }
  }

 private async getUserLocation(): Promise<any> {
    let rVal: any | null = null;

    try {
      await this.httpUtil.get("https://geolocation-db.com/json/").toPromise().then(location => {
        rVal =  location
      })
    } catch (e) {

    }

    return rVal;
  }

  async saveEvent(event: string) {
    let body = {
      event: event,
      location: (await this.getUserLocation()),
      time: new Date().toISOString()
    }

    await this.firestoreService.addDocument(Constants.COLLECTION_EVENTS, body);
  }
}

