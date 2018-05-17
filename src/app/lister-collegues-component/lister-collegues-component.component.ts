import { Component, OnInit, Input} from '@angular/core';
import {Collegue, Avis, Vote} from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-lister-collegues-component',
  templateUrl: './lister-collegues-component.component.html',
  styleUrls: ['./lister-collegues-component.component.css']
})
export class ListerColleguesComponentComponent implements OnInit {
  desCollegues:Collegue[];
  saisiePseudo:string = "";

  constructor(private _collegueServ: CollegueService) { }

  ngOnInit() {
    this._collegueServ.listerCollegues()
    .subscribe((listeCollegue:Collegue[]) => {
      this.desCollegues = listeCollegue;
    },(err => console.log(err)));
  }

  refresh() {
    
  }
}
