import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-new-collegue',
  templateUrl: './new-collegue.component.html',
  styleUrls: ['./new-collegue.component.css']
})
export class NewCollegueComponent implements OnInit {
  collegue:Collegue = new Collegue();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.submitted = true;
  }
}
