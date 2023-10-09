import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})

export class NewslistComponent implements OnInit {
  article!: Article;
  newsList: Article[] = [];

  constructor(public newsservice : NewsService){}

  ngOnInit(): void {
      this.article = {title: "", subtitle: "", abstract: "", category: "", body: "", image: ""}
      this.newsList = this.newsservice.getArticles();
  }

}
