import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public sorts: Array<String> = ['hot', 'new', 'rising', 'controversial', 'top'];
  public timespans: Array<String> = ['all', 'year', 'month', 'week', 'day', 'hour'];

  public subreddits: Array<String>;
  public numberOfPosts: number;
  public sort: String;
  public timespan: String;

  constructor() { }

  ngOnInit() {
  }

  setSortValue(e: any) {
    if (e.target.checked) {
      this.sort = e.target.value;
    }
  }

  setTimespan(e: any) {
    this.timespan = e.target.value;
  }

  search() {
    // make GET request
  }

}
