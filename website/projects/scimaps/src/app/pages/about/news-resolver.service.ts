import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { getSegmentedDate, isHttp } from '../../constants/utils';
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
    const [year, month, date] = getSegmentedDate(newsItem.date);
    const slug = toSlug(newsItem.title);

    if (type === 'pdfLink') {
      return `assets/${this.directory}/${year}/${month}-${date}/${slug}/${newsItem.pdfLink}`;
    } else {
      return `assets/${this.directory}/${year}/${month}-${date}/${slug}/${newsItem.thumbnail}`;
    }
  }

  // Mapper
  toNewsItem(newsItem: Params): NewsItem {
    return {
      title: newsItem.title,
      date: newsItem.date,
      publication: newsItem.source,
      thumbnail: newsItem.image,
      pdfLink: newsItem.pdfLink,
      sourceUrl: newsItem.sourceUrl
    };
  }

  resolve(): Observable<NewsItem[]> | Observable<never> {
    return this.contentService.getIndex<Params>('news').pipe(
      take(1),
      map((items: Params[]) => {
        return items.map((item: Params) => {
          const newsItem: NewsItem = this.toNewsItem(item);
          newsItem.thumbnail = this.getSourceLink(newsItem);
          if (newsItem.pdfLink) {
            if (!isHttp(newsItem.pdfLink)) {
              newsItem.pdfLink = this.getSourceLink(newsItem, 'pdfLink');
            }
          }
          return newsItem;
        });
      })
    );
  }
}
