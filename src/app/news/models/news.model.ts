import { Observable } from "rxjs";

export interface NewsService {
    getTopStories(): Observable<Article[]>;
}

export interface Article {
    title: string;
    url: string;
    abstract: string;
    imageUrl: string;
}