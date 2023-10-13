import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../article';
import { NewsService } from '../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-article-edition',
  templateUrl: './article-edition.component.html',
  styleUrls: ['./article-edition.component.css'],
})
export class ArticleEditionComponent implements OnInit {
  ngOnInit() {

    this.route.queryParamMap.subscribe(queryParams => {
      this.param1 = queryParams.get("p1");
    })

    this.article = {id: NaN, id_user: NaN, update_date: new Date(''), title: "", subtitle:"", abstract: "", category:"", body: "", image_data: '', image_media_type: '',};

    if (this.param1) {

      this.editmode=true;
      Number(this.param1);

      this.newsservice.getArticle(this.param1).subscribe({
        next: (article) => {
          this.article = {id: article.id, id_user: article.id_user, update_date: article.update_date, title: article.title, subtitle: article.subtitle, abstract: article.abstract, category: article.category, body: article.body, image_data: article.image_data, image_media_type: article.image_media_type};
          console.log(this.article);
        },
      });

    }

  }

  constructor(public newsservice: NewsService, private route: ActivatedRoute,
    private router: Router) {}

  param1: any;
  editmode: boolean;

  public article: Article;
  @ViewChild('articleform') articleform: any;

  create() {
    this.newsservice.setUserApiKey('DEV_TEAM_90785_3');
    this.newsservice.createArticle(this.article).subscribe({
      next: (article) => {
        window.alert("You successfully created the article " + this.article.title)
      },
    });
  }

  update() {
    this.newsservice.updateArticle(this.article).subscribe({
      next: (article) => {
        console.log(this.article.title);
      },
      complete: () => {
        this.router.navigate(['/newslist']);
      }
    });
  }
  
}
