import { Component } from "@angular/core";
import { NewsAggregatorService } from "../../services/newsAggregator.service";
import { Article } from "../../models/news.model";

@Component({
    selector: 'news-articlesearch',
    templateUrl: './articlesearch.component.html',
    styleUrls: ['./articlesearch.component.scss']
})
export class ArticleSearchComponent {
    articles: Article[] = [];
    searchTerm: string = '';

    constructor( private newsAggregatorService: NewsAggregatorService ) {}

    onSearch() {
        this.newsAggregatorService.searchArticles(this.searchTerm).subscribe(response => {
            this.articles = response;
        });
    }

}