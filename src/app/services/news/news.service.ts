import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { NYTArticleResponse } from 'src/app/models/nyt.model';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private API_ENDPOINT = 'https://api.nytimes.com/svc/';
  private API_KEY = 'j23Xr8PtXNrBEBqJYI75wOCFSHMerdw1';

  constructor(private http: HttpClient) {}

  getTopStories(section: string = 'home') {
    const url = `${this.API_ENDPOINT}topstories/v2/${section}.json?api-key=${this.API_KEY}`;
    return this.http.get(url);
  }

  articleSearch(query: string) {
    return this.http.get<NYTArticleResponse>(`${this.API_ENDPOINT}search/v2/articlesearch.json?q=${query}&api-key=${this.API_KEY}`);
  }
}