import { Component, OnInit, Input} from '@angular/core';
import { Collegue, Vote, Avis } from '../models';
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: 'app-historique-votes-component',
  templateUrl: './historique-votes-component.component.html',
  styleUrls: ['./historique-votes-component.component.css']
})
export class HistoriqueVotesComponentComponent implements OnInit {
  votes:Vote[] = [];
  constructor(private _cs: CollegueService) { }

  ngOnInit() {
    this._cs.subjectAvisCollegueObs
      .subscribe(vote => this.votes
      .push(vote));
  }

  supprimer(vote) {
    let supprimer = this.votes.lastIndexOf(vote);
    this.votes.splice(supprimer, 1);
  }

}
