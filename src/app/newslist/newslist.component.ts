import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { NewsService } from '../services/news.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})

export class NewslistComponent implements OnInit {
  article!: Article;
  newsList: Article[] = [];

  constructor(public newsservice : NewsService, public loginservice : LoginService){
    this.newsList = [
      {title: "Article 1", subtitle: "sub article 1", abstract: "nsxajnx", category: "Sports", body: "jxjndcnj", image: "image1.jpg"},
      {title: "Article 2", subtitle: "sub article 2", abstract: "kxdskmwckx", category: "News", body: "jndkcjkswd", image: "image2.png"}
    ]
  }

  ngOnInit(): void {
      this.article = {title: "", subtitle: "", abstract: "", category: "", body: "", image: ""}
      this.newsservice.getArticles().subscribe(res=>{
        this.newsList = res;
      }
        )

  }
}
