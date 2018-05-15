import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {
  pseudo:string;

  constructor(private route: ActivatedRoute) { 
    this.pseudo = route.snapshot.paramMap.get("pseudo")
  }

  ngOnInit() {
  }

}
