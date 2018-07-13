import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public date: Date;

  constructor() { }

  ngOnInit() {
    this.date = new Date();
  }

}
