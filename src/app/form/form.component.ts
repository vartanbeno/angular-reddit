import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
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

  constructor(private commonService: CommonService, private router: Router) { }

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
      this.commonService.subreddits = this.subreddits.replace(/ +(?= )/g,'').trim().replace(/\s+/g, '+');
      this.commonService.numberOfPosts = this.numberOfPosts;
      this.commonService.sort = this.sort;
      this.commonService.timespan = this.timespan;

      let params = {
        subreddits: this.commonService.subreddits,
        numberOfPosts: this.commonService.numberOfPosts,
        sort: this.commonService.sort
      }

      if (this.commonService.timespan) {
        params['timespan'] = this.commonService.timespan;
      }

      this.router.navigate(['/result'], { queryParams: params });
    }
  }

}
