import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = [];

  constructor(private dataService: DataService, private commonService: CommonService) { }

  ngOnInit() {
    this.dataService.getPosts(
      this.commonService.subreddits,
      this.commonService.numberOfPosts,
      this.commonService.sort,
      this.commonService.timespan,
    ).subscribe(data => {
      let post;
      for (post in data['data']['children']) {
        this.posts.push(data['data']['children'][post]['data'])
      }
      console.log(data['data']['children'])
    }
    )
  }

}
