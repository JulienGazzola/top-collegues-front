import { Component, OnInit, Input} from '@angular/core';
import {Collegue, Avis} from '../models';

@Component({
  selector: 'app-lister-collegues-component',
  templateUrl: './lister-collegues-component.component.html',
  styleUrls: ['./lister-collegues-component.component.css']
})
export class ListerColleguesComponentComponent implements OnInit {
  @Input() collegues:Collegue[];
  saisiePseudo:string = "";

  constructor() {

  }

  ngOnInit() {
  }

  refresh() {
    
  }
}
