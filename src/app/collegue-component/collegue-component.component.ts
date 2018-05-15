import { Component, OnInit,EventEmitter, Input, Output} from '@angular/core';
import {Collegue, Avis, Vote} from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.css']
})
export class CollegueComponentComponent implements OnInit {
  @Input() collegue:Collegue;
  @Output() vote: EventEmitter<Vote> = new EventEmitter<Vote>();

  avis: Avis;

  estAimer: boolean;
  estDetestable: boolean;
  constructor(private _collegueServ: CollegueService) { 
  }

  ngOnInit() {
  }

  onClick($event: Avis) {
    this._collegueServ.donnerUnAvis(this.collegue, $event)
      .then(c => {
        this.collegue = c;
        this.estAimer = (this.collegue.score >= 1000)
        this.estDetestable = (this.collegue.score <= -1000)
        this.vote.emit(new Vote($event, new Collegue(this.collegue.imageUrl, this.collegue.score, this.collegue.pseudo)))
      })
      .catch(err => console.log(err))
  }
}
