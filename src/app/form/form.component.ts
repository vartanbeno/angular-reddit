import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public sorts: Array<String> = ['hot', 'new', 'rising', 'controversial', 'top'];
  public timespans: Array<String> = ['all', 'year', 'month', 'week', 'day', 'hour'];
  public sortValue: String = null;

  constructor() { }

  ngOnInit() {
  }

  setSortValue(e: any) {
    if (e.target.checked) {
      this.sortValue = e.target.value;
      console.log(this.sortValue);
    }
  }

}
