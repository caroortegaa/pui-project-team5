import { Pipe, PipeTransform } from '@angular/core';
import { NewsService } from './services/news.service';
import { Article } from './article';

@Pipe({
  name: 'category',
  pure: false,
})
export class CategoryPipe implements PipeTransform {
  article: Article;
  newsList: Article[] = [];

  constructor(public newsService: NewsService) {}

  transform(newsList: Article[], category: string): Article[] {
    if (!newsList) return [];

    const categoryLower = category.toLowerCase();

    if (
      category === 'national' ||
      category === 'economy' ||
      category === 'sports' ||
      category === 'technology'
    ) {
      return newsList.filter(
        (article) => article.category.toLowerCase() === categoryLower
      );
    } else {
      return newsList;
    }
  }
}
