import { Component } from "@angular/core";
import { Article } from "../../models/news.model";
import { NewsAggregatorService } from "../../services/newsAggregator.service";

@Component({
    selector: 'news-topstories',
    templateUrl: './topstories.component.html',
    styleUrls: ['./topstories.component.scss']
})
export class TopStoriesComponent {
    articles: Article[] = []

    constructor(private newsAggregatorService: NewsAggregatorService) {}

    ngOnInit() {
        this.newsAggregatorService.getTopStories().subscribe(response => { this.articles = response; });
    }

}