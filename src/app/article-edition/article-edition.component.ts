import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-edition',
  templateUrl: './article-edition.component.html',
  styleUrls: ['./article-edition.component.css']
})
export class ArticleEditionComponent implements OnInit{
  ngOnInit() {
    this.article = {title: "", subtitle:"", abstract: "", category:"", body: "", image:""};

  }

  public article: Article;
  @ViewChild('articleform') articleform: any;


}
