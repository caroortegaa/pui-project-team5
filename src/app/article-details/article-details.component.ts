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
    this.new = [
      {
        id: 0,
        title: '',
        subtitle: '',
        abstract: '',
        category: '',
        body: '',
        image_data: '',
        image_media_type: '',
      },
    ];
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.eid = +params['id'];
      this.newsService.getArticle(this.eid).subscribe((article) => {
        this.new = article;
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
