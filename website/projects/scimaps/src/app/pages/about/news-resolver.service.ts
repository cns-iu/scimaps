import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { NewsItem } from '../../shared/components/news-item/news-item.model';
import { ContentService, toSlug } from '../../shared/services/content.service';

@Injectable({
  providedIn: 'root'
})
export class NewsResolverService {

  directory = 'content/news';

  constructor(private contentService: ContentService) { }

  // Used to get full path of resources.
  getSourceLink(newsItem: NewsItem, type: string = 'image'): string {
    const fullDate = new Date(newsItem.date);
    const year = fullDate.getFullYear();
    const date = ('0' + (fullDate.getUTCDate())).slice(-2);
    const month = ('0' + (fullDate.getUTCMonth() + 1)).slice(-2);
    const slug = toSlug(newsItem.title);

    if (type === 'pdfLink') {
      return `assets/${this.directory}/${year}/${month}-${date}/${slug}/${newsItem.pdfLink}`;
    } else {
      return `assets/${this.directory}/${year}/${month}-${date}/${slug}/${newsItem.thumbnail}`;
    }
  }

  // Mapper
  toNewsItem(newsItem: Params): NewsItem {
    const result: NewsItem = {
      title: newsItem.title,
      date: newsItem.date,
      publication: newsItem.source,
      thumbnail: newsItem.image,
      pdfLink: newsItem.pdfLink,
      sourceUrl: newsItem.sourceUrl
    };
    return result as NewsItem;
  }

  resolve(): Observable<NewsItem[]> | Observable<never> {
    return this.contentService.getIndex<Params[]>('news').pipe(
      take(1),
      map((items: Params[]) => {
        return items.map((item: Params) => {
          const newsItem: NewsItem = this.toNewsItem(item);
          newsItem.thumbnail = this.getSourceLink(newsItem);
          newsItem.pdfLink = this.getSourceLink(newsItem, 'pdfLink');
          return newsItem;
        });
      })
    );
  }
 }
