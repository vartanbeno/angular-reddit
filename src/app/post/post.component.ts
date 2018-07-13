import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public posts: any = [];
  public selectedPost: number = -1;
  public faComments = faComments;
  public faArrowUp = faArrowUp;

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
