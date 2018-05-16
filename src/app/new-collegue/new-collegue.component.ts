import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Collegue } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-new-collegue',
  templateUrl: './new-collegue.component.html',
  styleUrls: ['./new-collegue.component.css']
})
export class NewCollegueComponent implements OnInit {
  collegue:Collegue = new Collegue();
  submitted = false;

  constructor(private _collegueServ: CollegueService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this._collegueServ.ajouterCollegue(this.collegue)
      .then(c => {
        this.collegue = c;
        this.router.navigate(['/accueil'])
      })
      .catch(err => console.log(err));
  }
}
