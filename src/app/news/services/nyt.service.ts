import { HttpClient } from "@angular/common/http";
import { Observable, map } from 'rxjs';
import { Injectable } from "@angular/core";
import { article, newsService } from "../models/news.model";

@Injectable({
    providedIn: 'root'
})
export class nytService implements newsService {
    private API_ENDPOINT = 'https://api.nytimes.com/svc/';
    private API_KEY = 'j23Xr8PtXNrBEBqJYI75wOCFSHMerdw1';

    constructor(private http: HttpClient) {}

    getTopStories() {
        const section: string = "home";
        const url = `${this.API_ENDPOINT}topstories/v2/${section}.json?api-key=${this.API_KEY}`;

        return this.http.get<any>(url).pipe(
            map(response => this.transformToArticles(response.results))
        );
    }

    private transformToArticles(stories: any[]): article[] {
        return stories.map(story => ({
            title: story.title,
            url: story.web_url,
            abstract: story.abstract,
            imageUrl: story.multimedia?.[0]?.url || ''
        }));
    }
}