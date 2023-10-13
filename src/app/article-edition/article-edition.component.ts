import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../article';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-article-edition',
  templateUrl: './article-edition.component.html',
  styleUrls: ['./article-edition.component.css'],
})
export class ArticleEditionComponent implements OnInit {
  ngOnInit() {

    this.article = {id: NaN, title: "", subtitle:"", abstract: "", category:"", body: "", image_data: '', image_media_type: '',};


  }
  
  constructor(public newsservice: NewsService) {}

  public article: Article;
  @ViewChild('articleform') articleform: any;

  create() {
    this.newsservice.setUserApiKey('DEV_TEAM_90785_3');
    this.newsservice.createArticle(this.article).subscribe({
      next: (article) => {
        console.log(this.article.title);
      },
    });

  }
}
