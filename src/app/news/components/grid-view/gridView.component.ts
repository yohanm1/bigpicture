import { Component, Input } from "@angular/core";
import { article } from "../../models/news.model";

@Component({
    selector: 'news-gridView',
    templateUrl: './gridView.component.html',
    styleUrls: ['./gridView.component.scss']
})
export class gridViewComponent {

    @Input() articles: article[] = [];

}