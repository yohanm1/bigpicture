import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gridViewComponent } from './components/grid-view/gridView.component';
import { nytService } from './services/nyt.service';
import { TopStoriesComponent } from './components/topstories/topstories.component';
import { ArticleSearchComponent } from './components/articlesearch/articlesearch.component';
import { NewsAggregatorService } from './services/newsAggregator.service';
import { FormsModule } from '@angular/forms';
import { BBCService } from './services/bbc.service';



@NgModule({
	declarations: [
		TopStoriesComponent,
		ArticleSearchComponent,
		gridViewComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		TopStoriesComponent,
		ArticleSearchComponent
	],
	providers: [
		NewsAggregatorService,
		nytService,
		BBCService
	]
})
export class NewsModule { }
