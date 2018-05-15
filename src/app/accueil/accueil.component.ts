import { Component, OnInit } from '@angular/core';
import { Collegue, Vote, Avis} from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  desCollegues:Collegue[];
  votes:Vote[];

  constructor(private _collegueServ: CollegueService) { }

  ngOnInit() {
    this.votes = [];
    this._collegueServ.listerCollegues()
    .then((listeCollegue:Collegue[]) =>{
      this.desCollegues = listeCollegue;
    })
    .catch(err => console.log(err))
  }
}
