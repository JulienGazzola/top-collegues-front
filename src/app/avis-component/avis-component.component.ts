import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

import {Avis, Collegue} from '../models';

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.css']
})
export class AvisComponentComponent implements OnInit {
  @Output() aime:EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input() estAimer:boolean;
  @Input() estDetestable:boolean;

  constructor() {
  }

  ngOnInit() {
  }

  onClickAime() {
    this.aime.emit(Avis.AIMER);
  }

  onClickDeteste() {
    this.aime.emit(Avis.DETESTER);
  }
}
