import { Injectable } from "@angular/core";
import { nytService } from "./nyt.service";
import { newsService } from "../models/news.model";

@Injectable({
    providedIn: 'root'
})
export class NewsServiceFactory {
    constructor(
        private nytService: nytService
    ) {}

    getService(source: string): newsService {
        switch(source) {
            case 'nyt':
                return this.nytService;
            default:
                throw new Error(`News source "${source}" not supported.`);
        }
    }
}