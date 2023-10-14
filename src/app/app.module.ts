import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewslistComponent } from './newslist/newslist.component';
import { ArticleEditionComponent } from './article-edition/article-edition.component';
import {ArticleDetailsComponent} from './article-details/article-details.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryPipe } from './category.pipe';
import { BuscarPipe } from './buscar.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleEditionComponent,
    NewslistComponent,
    ArticleDetailsComponent,
    LoginComponent,
    NavbarComponent,
    CategoryPipe,
    BuscarPipe,
    UploadImageComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    NavBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
