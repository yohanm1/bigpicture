import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Article, NewsService } from "../models/news.model";

@Injectable({
    providedIn: 'root'
})
export class nytService implements NewsService {
    private API_ENDPOINT = 'https://api.nytimes.com/svc/';
    private API_KEY = 'j23Xr8PtXNrBEBqJYI75wOCFSHMerdw1';

    constructor(private http: HttpClient) {}

    getTopStories(): Observable<Article[]> {
        const section: string = "home";
        const url = `${this.API_ENDPOINT}topstories/v2/${section}.json?api-key=${this.API_KEY}`;

        return this.http.get<any>(url).pipe(
            map(response => this.transformTopStoriesToArticles(response.results))
        );
    }

    private transformTopStoriesToArticles(stories: any[]): Article[] {
        return stories.map(story => ({
            title: story.title,
            url: story.url,
            abstract: story.abstract,
            imageUrl: story.multimedia?.[0]?.url || ''
        }));
    }

    searchArticles(query: string): Observable<Article[]> {
        const url = `${this.API_ENDPOINT}search/v2/articlesearch.json?q=${query}&api-key=${this.API_KEY}`;

        return this.http.get<any>(url).pipe(
            map(response => this.transformSearchToArticles(response.results))
        );
    }

    private transformSearchToArticles(stories: any[]): Article[] {
        return stories.map(story => ({
            title: story.headline,
            url: story.web_url,
            abstract: story.snippet,
            imageUrl: story.multimedia?.[0]?.url || ''
        }));
    }
}