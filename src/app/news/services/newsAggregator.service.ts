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

        return forkJoin(allNewsObservables).pipe(
            map(results => {
                return results.reduce((acc, val) => acc.concat(val), []);
            })
        );
    }
}