import { Observable } from "rxjs";

export interface newsService {
    getTopStories(): Observable<article[]>;
}

export interface article {
    title: string;
    url: string;
    abstract: string;
    imageUrl: string;
}