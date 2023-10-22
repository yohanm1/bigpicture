import { Injectable } from "@angular/core";
import { nytService } from "./nyt.service";
import { NewsService, Article } from "../models/news.model";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NewsAggregatorService {

    private sources: NewsService[] = []

    constructor(private http: HttpClient) {
        this.sources.push(new nytService(http));
    }

    getTopStories(): Observable<Article[]> {
        const allNewsObservables = this.sources.map(source => source.getTopStories());
        return this.combineArticlesFromSources(allNewsObservables);
    }

    searchArticles(query: string): Observable<Article[]> {
        const allNewsObservables = this.sources.map(source => source.searchArticles(query));
        return this.combineArticlesFromSources(allNewsObservables);
    }

    private combineArticlesFromSources(allArticleObservables: Observable<Article[]>[]): Observable<Article[]> {
        return forkJoin(allArticleObservables).pipe(
            map(articlesArray => {
                return articlesArray.reduce((acc, val) => acc.concat(val), []);
            })
        );
    }
}