import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gridViewComponent } from './components/grid-view/gridView.component';
import { NewsServiceFactory } from './services/news-factory.service';
import { nytService } from './services/nyt.service';
import { TopStoriesComponent } from './components/topstories/topstories.component';



@NgModule({
  declarations: [
    TopStoriesComponent,
    gridViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopStoriesComponent
  ],
  providers: [
    NewsServiceFactory,
    nytService
  ]
})
export class NewsModule { }
