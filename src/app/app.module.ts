import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './navigation/top-nav/top-nav.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchTrendingComponent } from './components/search-trending/search-trending.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ArticlesearchComponent } from './components/news/articlesearch/articlesearch.component';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    CategoriesComponent,
    SearchTrendingComponent,
    SettingsComponent,
    ArticlesearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
