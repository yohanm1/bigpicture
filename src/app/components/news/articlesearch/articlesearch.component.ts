import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { NYTArticle } from 'src/app/models/nyt.model';

@Component({
  selector: 'app-articlesearch',
  templateUrl: './articlesearch.component.html',
  styleUrls: ['./articlesearch.component.scss']
})
export class ArticlesearchComponent {
  searchTerm: string = '';
  articles: NYTArticle[] = [];

  constructor(private newsService: NewsService) {}

  onSearch() {
    this.newsService.articleSearch(this.searchTerm).subscribe(response => {
      this.articles = response['response']['docs'];
    })
  }
}
