import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Collegue, Avis, Vote} from '../models';
import { map, filter, tap } from "rxjs/operators";

import {environment} from '../../environments/environment';
import { Observable, ReplaySubject } from 'rxjs';
const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class CollegueService {
  private subjectAvisCollegue = new ReplaySubject<Vote>(3);

  get subjectAvisCollegueObs() {
    return this.subjectAvisCollegue.asObservable();
  }

  constructor(private _http:HttpClient) { }

  listerCollegues():Observable<Collegue[]> {
    return this._http.get<Collegue[]>(`${URL_BACKEND}/collegues`);
  }
  donnerUnAvis(unCollegue:Collegue, avis:Avis):Observable<Collegue> {
    return this._http.patch<Collegue>(`${URL_BACKEND}/collegues/${unCollegue.pseudo}`, {action : avis})
    .pipe(
      tap(col => {
        // émission événement nouvel avis
        this.subjectAvisCollegue.next(new Vote(avis, col));
      })
    );
  }

  trouverCollegue(pseudo:string) : Observable<Collegue> {
    return this._http.get<Collegue>(`${URL_BACKEND}/collegues/${pseudo}`);
  }
  
  ajouterCollegue(collegue:Collegue) : Observable<Collegue> {
    return this._http.post<Collegue>(`${URL_BACKEND}/collegues/nouveau`, collegue);
  }
}
