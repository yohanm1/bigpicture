import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private API_ENDPOINT = 'https://api.nytimes.com/svc/topstories/v2';
  private API_KEY = 'j23Xr8PtXNrBEBqJYI75wOCFSHMerdw1';

  constructor(private http: HttpClient) {}

  getTopStories(section: string = 'home') {
    const url = `${this.API_ENDPOINT}/${section}.json?api-key=${this.API_KEY}`;
    return this.http.get(url);
  }
}