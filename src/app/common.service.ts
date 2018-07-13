import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public subreddits: String;
  public numberOfPosts: String;
  public sort: String;
  public timespan: String;

  constructor() { }
}
