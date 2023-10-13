import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NewslistComponent } from './newslist/newslist.component';
import { ArticleEditionComponent } from './article-edition/article-edition.component';

const routes: Routes = [
  { path: '', redirectTo: '/newslist', pathMatch: 'full' },
  { path: 'newslist', component: NewslistComponent },
  { path: 'articlesdetail/:id', component: ArticleDetailsComponent },
  {path: 'editarticle', component: ArticleEditionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
