import { Component, OnInit, Input} from '@angular/core';
import {Collegue, Vote, Avis} from '../models';

@Component({
  selector: 'app-historique-votes-component',
  templateUrl: './historique-votes-component.component.html',
  styleUrls: ['./historique-votes-component.component.css']
})
export class HistoriqueVotesComponentComponent implements OnInit {
  @Input() votes:Vote[];
  constructor() { }

  ngOnInit() {
  }

  supprimer(vote) {
    const index = this.votes.indexOf(vote);
    this.votes.splice(index, 1);
  }

}
