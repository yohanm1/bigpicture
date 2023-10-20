import { Component, Input } from "@angular/core";
import { Article } from "../../models/news.model";

@Component({
    selector: 'news-gridView',
    templateUrl: './gridView.component.html',
    styleUrls: ['./gridView.component.scss']
})
export class gridViewComponent {

    @Input() articles: Article[] = [];

}