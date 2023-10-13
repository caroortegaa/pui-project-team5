import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
import { LoginService } from '../services/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})
export class ArticleDetailsComponent implements OnInit {
  eid: number;
  new: any;
  article: Article;

  constructor(
    public route: ActivatedRoute,
    public newsService: NewsService,
    public loginservice: LoginService,
    private location: Location
  ) {
 
  }

  ngOnInit() {
    this.article = {id: NaN, id_user: NaN, update_date: new Date(""), title: "", subtitle: "", abstract: "", category: "", body: "", image_data: "", image_media_type:""}
    
    this.route.params.subscribe((params) => {
      this.eid = +params['id'];
      
      this.newsService.getArticle(this.eid).subscribe((article) => {
        this.new = article;
        this.article = {id: article.id, id_user: article.id_user, update_date: article.update_date, title: article.title, subtitle: article.subtitle, abstract: article.abstract, category: article.category, body: article.body, image_data: article.image_data, image_media_type:article.image_media_type}
      });
    });
    console.log('image_data:', this.new.image_data);
    console.log('image_media_type:', this.new.image_media_type);
  }

  goBack(): void {
    this.location.back();
  }

  getImageUrl(imageData: string, mediaType: string): string {
    return `data:${mediaType};base64,${imageData}`;
  }
}
