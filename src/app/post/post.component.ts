import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../data.service';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public posts: Array<any> = [];
  public postsBackup: Array<any> = [];

  public selectedPost: number = -1;
  public faComments = faComments;
  public faArrowUp = faArrowUp;

  public sortBy: Array<String> = ['default', 'newest', 'oldest', 'most commented', 'most upvoted'];

  public activePost: any;

  public subreddits: String;
  public numberOfPosts: String;
  public sort: String;
  public timespan: String;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe( params => {
      this.subreddits = params.subreddits;
      this.numberOfPosts = params.numberOfPosts;
      this.sort = params.sort;
      this.timespan = params.timespan;
    })
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'j' && this.selectedPost < this.posts.length - 1) {
      this.selectedPost++;
      this.scrollToActivePost(false);
    }
    else if (event.key === 'k' && this.selectedPost > 0) {
      this.selectedPost--;
      this.scrollToActivePost(true);
    }
    else if (event.key === 'Enter' && this.selectedPost !== -1) {
      window.open('https://old.reddit.com' + this.posts[this.selectedPost].permalink + '?sort=top');
    }
  }

  ngOnInit() {
    return this.dataService.getPosts(
      this.subreddits,
      this.numberOfPosts,
      this.sort,
      this.timespan,
    ).subscribe(data => {
      let post;
      for (post in data['data']['children']) {
        this.posts.push(data['data']['children'][post]['data'])
      }
      console.log(this.posts)
      // copy not reference
      this.postsBackup = this.posts.map(post => Object.assign({ }, post));
    })
  }

  changeOrder(sort: String) {
    console.log('Sorting by', sort);

    switch(sort) {
      case this.sortBy[0]:
        this.posts = this.postsBackup.map(post => Object.assign({ }, post));
        break;
      case this.sortBy[1]:
        this.posts.sort((post1, post2) => post2['created_utc'] - post1['created_utc']);
        break;
      case this.sortBy[2]:
        this.posts.sort((post1, post2) => post1['created_utc'] - post2['created_utc']);
        break;
      case this.sortBy[3]:
        this.posts.sort((post1, post2) => post2['num_comments'] - post1['num_comments']);
        break;
      case this.sortBy[4]:
        this.posts.sort((post1, post2) => post2['ups'] - post1['ups']);
        break;
      default:
        console.log('Something went wrong');
    }

    this.selectedPost = -1

  }

  unfocus() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  scrollToActivePost(alignTop: boolean) {
    setTimeout(() => {
      this.activePost = document.getElementsByClassName('active')[0];
      console.log(this.activePost.getElementsByClassName('post-title')[0].textContent);
      if (!this.isVisible(this.activePost)) {
        this.activePost.scrollIntoView(alignTop);
      }
    }, 100);
  }

  isVisible(element: any) {
    let rect = element.getBoundingClientRect();
    let html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

}
