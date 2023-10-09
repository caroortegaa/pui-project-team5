import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewslistComponent } from './newslist/newslist.component';
import { ArticleEditionComponent } from './article-edition/article-edition.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NewslistComponent,
    ArticleEditionComponent,
    ArticleDetailsComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
