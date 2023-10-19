import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gridViewComponent } from './components/grid-view/gridView.component';
import { NewsServiceFactory } from './services/news-factory.service';
import { nytService } from './services/nyt.service';



@NgModule({
  declarations: [
    gridViewComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    NewsServiceFactory,
    nytService
  ]
})
export class NewsModule { }
