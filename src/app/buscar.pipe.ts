import { Pipe, PipeTransform } from '@angular/core';
import { NewsService } from './services/news.service';
import { Article } from './article';

@Pipe({
  name: 'buscar',
  pure: false,
})
export class BuscarPipe implements PipeTransform {
  article: Article;
  newsList: Article[] = [];

  constructor(public newsService: NewsService) {}

  transform(newsList: Article[], busqueda: string): Article[] {
    if (!newsList || !busqueda) return newsList;

    const busquedaLower = busqueda.toLowerCase();

    return newsList.filter((article) =>
      article.title.toLowerCase().includes(busquedaLower)
    );
  }
}
