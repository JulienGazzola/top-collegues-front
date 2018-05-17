import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue, Vote, Avis} from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {
  pseudo:string;
  collegue:Collegue = new Collegue();
  @Output() vote: EventEmitter<Vote> = new EventEmitter<Vote>();

  constructor(private route: ActivatedRoute, private _colServ:CollegueService) { 
    this.pseudo = route.snapshot.paramMap.get("pseudo");
    this._colServ.trouverCollegue(this.pseudo)
      .subscribe(col => this.collegue = col, err => console.log(err));
  }

  ngOnInit() {
  }

  onClick($event: Avis) {
    this._colServ.donnerUnAvis(this.collegue, $event)
      .subscribe(c => {
        this.collegue = c;
        this.vote.emit(new Vote($event, this.collegue))
      },err => console.log(err))
  }
}
