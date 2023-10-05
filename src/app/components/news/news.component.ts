import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  stories: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getTopStories().subscribe((data: any) => {
      this.stories = data.results;
    });
  }
}
