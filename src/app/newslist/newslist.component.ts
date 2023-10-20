import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { NewsService } from '../services/news.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ImageServiceService } from '../image-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css'],
})
export class NewslistComponent implements OnInit {
  article: Article;
  newsList: Article[] = [];
  id: number;
  qparam1: string;

  constructor(public newsservice : NewsService, public loginservice : LoginService, private router: Router, private route: ActivatedRoute, private imageservice: ImageServiceService){
 
  }

  ngOnInit(): void {

      this.article = {id: NaN, id_user: NaN, update_date: new Date(""), title: "", subtitle: "", abstract: "", category: "", body: "", image_data: "", image_media_type:"", thumbnail_image:"", thumbnail_media_type:""}
        this.newsservice.getArticles().subscribe(res=>{
          this.newsList = res;
          //console.log(this.newsList)
        }
        )   
      
  }

  remove(article: Article) {
    console.log(article);
    this.newsservice.deleteArticle(article).subscribe({
       next: (article) => console.log('deleted'),
       complete: () => delete this.newsList[article.id] ,
     });
     this.newsservice.getArticles();
     return location.reload();
   }

  verNew(eid: number) {
    this.router.navigate(['/articlesdetail', eid]);
  }

  getImageUrl(imageData: string, mediaType: string): string {
    // this.article.image_data = this.imageservice.getImageData()?.imageData;
    // this.article.image_media_type = this.imageservice.getImageData()?.mediaType;
    return `data:${mediaType};base64,${imageData}`;
  }

  selectedCategory: string = '';

  selectCategory(category: string) {
    this.selectedCategory = category.toLowerCase();
    console.log(this.busqueda);
  }

  busqueda: string = '';

}
