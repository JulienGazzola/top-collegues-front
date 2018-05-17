import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {

  constructor(private _collegueServ: CollegueService) { }

  ngOnInit() {
  }

}
