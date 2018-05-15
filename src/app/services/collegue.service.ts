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

  listerCollegues():Promise<Collegue[]> {
    return this._http.get<Collegue[]>(`${URL_BACKEND}/collegues`)
      .toPromise();
  }
  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue> {
    return this._http.patch<Collegue>(`${URL_BACKEND}/collegues/${unCollegue.pseudo}`, {action : avis})
      .toPromise();
  }

  trouverCollegue(pseudo:string) : Promise<Collegue> {
    return this._http.get<Collegue>(`${URL_BACKEND}/collegues/${pseudo}`).toPromise();
  }
}
