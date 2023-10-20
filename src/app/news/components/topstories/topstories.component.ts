import { Component } from "@angular/core";
import { NewsServiceFactory } from "../../services/news-factory.service";
import { article } from "../../models/news.model";

@Component({
    selector: 'news-topstories',
    templateUrl: './topstories.component.html',
    styleUrls: ['./topstories.component.scss']
})
export class TopStoriesComponent {
    articles: article[] = []

    constructor(private newsServiceFactory: NewsServiceFactory) {}

    ngOnInit() {
        const newsService = this.newsServiceFactory.getService('nyt');

        newsService.getTopStories().subscribe(response => { this.articles = response; });
    }

}