import { Injectable } from "@angular/core";
import { Article, NewsService } from "../models/news.model";
import { Observable, map, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class BBCService implements NewsService {
    private API_ENDPOINT = 'http://localhost:8080/api/bbc';

    constructor(private http: HttpClient) {}

    getTopStories(): Observable<Article[]> {
        return this.http.get<any>(this.API_ENDPOINT).pipe(
            map(response => this.transformTopStoriesToArticles(response))
        );
    }

    private transformTopStoriesToArticles(stories: any[]): Article[] {
        return stories.map(story => ({
            title: story.title,
            url: story.link,
            abstract: story.snippet,
            imageUrl: story.imageUrl || ''
        }));
    }

    searchArticles(query: string): Observable<Article[]> {
        return throwError('Not implemented yet');
    }
}