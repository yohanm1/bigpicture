import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './navigation/top-nav/top-nav.component';
import { HomeComponent } from './shared/components/home/home.component';
import { CategoriesComponent } from './shared/components/categories/categories.component';
import { SearchTrendingComponent } from './shared/components/search-trending/search-trending.component';
import { SettingsComponent } from './shared/components/settings/settings.component';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    CategoriesComponent,
    SearchTrendingComponent,
    SettingsComponent
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
