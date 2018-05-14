import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Collegue, Avis } from '../models';

import {environment} from '../../environments/environment';
const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http:HttpClient) { }

  listerCollegues() {
    this._http.get(URL_BACKEND)
      .toPromise()
      .then((data:any) => {
        return data;
      }, (error:any) => {
        return error;
      });
  }
}
