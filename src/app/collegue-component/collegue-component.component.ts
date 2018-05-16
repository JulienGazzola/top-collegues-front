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

  constructor(private _collegueServ: CollegueService) { 
  }

  ngOnInit() {
  }

  onClick($event: Avis) {
    this._collegueServ.donnerUnAvis(this.collegue, $event)
      .then(c => {
        this.collegue = c;
        this.vote.emit(new Vote($event, this.collegue))
      })
      .catch(err => console.log(err))
  }
}