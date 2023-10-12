import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { NewsService } from '../services/news.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css'],
})
export class NewslistComponent implements OnInit {
  article!: Article;
  newsList: Article[] = [];

  constructor(
    public newsservice: NewsService,
    public loginservice: LoginService,
    private router: Router
  ) {
    this.newsList = [
      {
        id: 1,
        title: 'Article 1',
        subtitle: 'sub article 1',
        abstract: 'nsxajnx',
        category: 'Sports',
        body: 'jxjndcnj',
        image_data: '',
        image_media_type: '',
      },
      {
        id: 2,
        title: 'Article 2',
        subtitle: 'sub article 2',
        abstract: 'kxdskmwckx',
        category: 'News',
        body: 'jndkcjkswd',
        image_data: '',
        image_media_type: '',
      },
    ];
  }

  ngOnInit(): void {
    this.article = {
      id: 0,
      title: '',
      subtitle: '',
      abstract: '',
      category: '',
      body: '',
      image_data: '',
      image_media_type: '',
    };
    this.newsservice.getArticles().subscribe((res) => {
      this.newsList = res;
    });
  }

  verNew(eid: number) {
    this.router.navigate(['/articlesdetail', eid]);
  }

  getImageUrl(imageData: string, mediaType: string): string {
    return `data:${mediaType};base64,${imageData}`;
  }
}
