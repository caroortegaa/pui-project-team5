import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewslistComponent } from './newslist/newslist.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
  declarations: [AppComponent, NewslistComponent, ArticleDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
