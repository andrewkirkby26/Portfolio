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

// The purpose of this service is to simply be a place that components can put data to persit throughout this session. (Past their lifecycle)
// That way upon their rebirth/reinit they can check if data is already here as opposed to having to wait for http calls to come back again

//PLEASE FOR ALL THAT IS HOLY USE LONG UNIQUE NAMES!!! Otherwise components will overwrite other components data
@Injectable({
  providedIn: 'root',
})
export class DataService{

  resume: Resume = new Resume(null);

  constructor() {
    this.loadResume();
  }

  loadResume() {
    let res = this.fetchResume();

    this.resume = new Resume(res);

    document.title = this.resume.about!.name;
  }

  fetchResume(): any {
    return ClientResume;
  }
}

