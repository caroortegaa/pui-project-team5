/*import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

}*/

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Article } from '../article';

type CardContent = {
  title: string;
  description: string;
  imageUrl: string;
};

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  
  template: `
    <mat-toolbar color="primary"> Responsive Card Grid </mat-toolbar>
    <div class="container responsive-grid">
      <mat-card *ngFor="let article of articles()">
        <mat-card-header>
          <mat-card-title>{{ article.title }} </mat-card-title>
        </mat-card-header>
        <br />
        <img mat-card-image [src]="article.imageUrl" />
        <mat-card-content>
          <br />
          <p>
            {{ article.body }}
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>LIKE</button>
          <button mat-button>SHARE</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 24px;
      }

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .responsive-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 24px;
      }
    `,
  ],
  imports: [CommonModule, MatCardModule, MatToolbarModule, MatButtonModule],
})
export class NavBarComponent {
  articles = signal<CardContent[]>([]);
  public article: Article;

  images = [
    'nature',
    'sky',
    'grass',
    'mountains',
    'rivers',
    'glacier',
    'forest',
    'streams',
    'rain',
    'clouds',
  ];

  constructor() {
    const articles: CardContent[] = [];
    for (let i = 0; i < this.images.length; i++) {
      articles.push({
        title: `Card ${i + 1}`,
        description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. `,
        imageUrl: `https://source.unsplash.com/random/500X500?${this.images[i]}`,
      });
    }

    this.articles.set(articles);
  }
}


/* <mat-toolbar>
    <span> Create card view</span>
</mat-toolbar>

<div class="content">
    <div class="row wrap" fxLayoutGap = "16 px">
        <div fxFlex="25%" *ngFor="let id of articles">
            <mat-card class="mat-elevation-z4">
                <mat-card-header>
                    <mat-card-title>Awesome Article!</mat-card-title>
                </mat-card-header>
                <img mat-card-image src = "../People-fireworks.jpg">
                <mat-card-content>
                    <p>
                        Hola dijo la carambola
                    </p>
                </mat-card-content>
                <mat-card-actions>
                    <button mat-button>Click here</button>
                </mat-card-actions>
            </mat-card>
        </div>
    </div>

</div>*/