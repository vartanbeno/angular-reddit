import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public date: Date;
  public sortBy: Array<String> = ['default','newest', 'oldest', 'most comments', 'most upvotes'];

  constructor() { }

  ngOnInit() {
    this.date = new Date();
  }

}
