import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts(
    subreddits: String,
    numberOfPosts: String,
    sort: String,
    timespan: String
  ) {
    let url = `https://www.reddit.com/r/${subreddits}/${sort}.json?limit=${numberOfPosts}`;
    url += (timespan) ? `&t=${timespan}` : '';
    return this.http.get(url);
  }

}
