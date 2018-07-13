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
    return this.http.get(`https://www.reddit.com/r/${subreddits}/${sort}.json?limit=${numberOfPosts}&t=${timespan}`);
  }

}
