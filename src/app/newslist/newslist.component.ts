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
  article: Article;
  newsList: Article[] = [];
  id: number;

  constructor(public newsservice : NewsService, public loginservice : LoginService, private router: Router){
 
  }

  ngOnInit(): void {
      this.article = {id: NaN, title: "", subtitle: "", abstract: "", category: "", body: "", image_data: "", image_media_type:""}
      this.newsservice.getArticles().subscribe(res=>{
        this.newsList = res;
      }
        )

  }

  remove(article:Article) {
    console.log(article)
    this.newsservice.deleteArticle(article).subscribe({
      next:(article) => console.log('deleted'),
      complete: () => delete this.newsList[article.id]
    })
    this.newsservice.getArticles()
    return location.reload();
  }

  verNew(eid: number) {
    this.router.navigate(['/articlesdetail', eid]);
  }

  getImageUrl(imageData: string, mediaType: string): string {
    return `data:${mediaType};base64,${imageData}`;
  }

}
