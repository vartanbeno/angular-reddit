import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public sorts: Array<String> = ['hot', 'new', 'rising', 'controversial', 'top'];
  public timespans: Array<String> = ['all', 'year', 'month', 'week', 'day', 'hour'];

  public subreddits: String = '';
  public numberOfPosts: String = '';
  public sort: String = '';
  public timespan: String = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  setSortValue(e: any) {
    if (e.target.checked) {
      this.sort = e.target.value;
    }
    if (!(this.sort === 'controversial') && !(this.sort === 'top')) {
      this.timespan = '';
    }
  }

  setTimespan(e: any) {
    this.timespan = e.target.value;
  }

  submitForm() {
    if (!this.subreddits || !this.sort) {
      alert('You need to provide at least one subreddit and a sort value.')
    }
    else {
      // in case of multiple subreddits, replace the space(s) between them with a plus (+)
      let subreddits = this.subreddits.replace(/ +(?= )/g,'').trim().replace(/\s+/g, '+');
      let numberOfPosts = this.numberOfPosts;
      let sort = this.sort;
      let timespan = this.timespan;

      let params = {
        subreddits: subreddits,
        numberOfPosts: numberOfPosts,
        sort: sort
      }

      if (timespan) {
        params['timespan'] = timespan;
      }

      this.router.navigate(['/result'], { queryParams: params });
    }
  }

}
