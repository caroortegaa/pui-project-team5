import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { NewsService } from '../services/news.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  article: Article;
  newsList: Article[] = [];
  id: number;

  constructor(
    public newsservice: NewsService,
    public loginservice: LoginService
  ) {}

  ngOnInit(): void {
    this.article = {
      id_user: NaN,
      update_date: new Date(''),
      id: NaN,
      title: '',
      subtitle: '',
      abstract: '',
      category: '',
      body: '',
      image_data: '',
      image_media_type: '',
      thumbnail_image:'',
      thumbnail_media_type:''
    };
    this.newsservice.getArticles().subscribe((res) => {
      this.newsList = res;
    });
  }

  selectedCategory: string | null = null;

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
