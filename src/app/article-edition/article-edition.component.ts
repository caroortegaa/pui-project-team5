import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../article';
import { NewsService } from '../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageServiceService } from '../image-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-article-edition',
  templateUrl: './article-edition.component.html',
  styleUrls: ['./article-edition.component.css'],
})


export class ArticleEditionComponent implements OnInit {

  article: Article;
  imageError: any;
  isImageSaved: boolean;
  cardImageBase64: string; 

  ngOnInit() {

    this.route.queryParamMap.subscribe(queryParams => {
      this.param1 = queryParams.get("p1");
    })

    this.article = {id: NaN, id_user: NaN, update_date: new Date(''), title: "", subtitle:"", abstract: "", category:"", body: "", image_data: '', image_media_type: '', thumbnail_image: '', thumbnail_media_type: ''};

    if (this.param1) {

      this.editmode=true;
      Number(this.param1);

      this.newsservice.getArticle(this.param1).subscribe({
        next: (article) => {
          this.article = {id: article.id, id_user: article.id_user, update_date: article.update_date, title: article.title, subtitle: article.subtitle, abstract: article.abstract, category: article.category, body: article.body, image_data: article.image_data, image_media_type: article.image_media_type, thumbnail_image: article.thumbnail_image, thumbnail_media_type: article.thumbnail_media_type};
          console.log(this.article);
        },
      });

    }

  }

  constructor(public newsservice: NewsService, private route: ActivatedRoute,
    private router: Router, private imageService: ImageServiceService) {}

  param1: any;
  editmode: boolean;
  @ViewChild('articleform') articleform: any;

  create() {
    debugger
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

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const MAX_SIZE = 20971520;
      const ALLOWED_TYPES = ['image/png', 'image/jpeg'];

      if (fileInput.target.files[0].size > MAX_SIZE) {
        this.imageError =
          'Maximum size allowed is ' + MAX_SIZE / 1000 + 'Mb';
        return false;
      }
      if (!_.includes(ALLOWED_TYPES, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
        const imgBase64Path = e.target.result;
        this.cardImageBase64 = imgBase64Path;
        this.isImageSaved = true;

        this.article.image_media_type = fileInput.target.files[0].type;
        const head = this.article.image_media_type.length + 13;
        this.article.image_data = e.target.result.substring(head, e.target.result.length);

        this.imageService.setImageData(
          this.article.image_data = e.target.result.substring(head, e.target.result.length),
          fileInput.target.files[0].type
        );

        console.log('imageData:', this.imageService.getImageData().imageData);
        console.log('mediaType:', this.imageService.getImageData().mediaType);

      };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
    return true;
  }
  
}
