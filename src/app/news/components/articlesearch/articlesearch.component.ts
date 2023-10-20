import { Component } from "@angular/core";
import { NewsAggregatorService } from "../../services/newsAggregator.service";

@Component({
    selector: 'news-articlesearch',
    templateUrl: './articlesearch.component.html',
    styleUrls: ['./articlesearch.component.scss']
})
export class ArticleSearchComponent {

    constructor( private newsAggregatorService: NewsAggregatorService ) {}

    onSearch() {

    }

}