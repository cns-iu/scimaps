import { Injectable } from '@angular/core';
import { Resolve, Params } from '@angular/router';
import { Book } from '../../shared/components/book-overview/book-overview.component';
import { Observable, forkJoin, combineLatest } from 'rxjs';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { take, map, mergeMap, shareReplay } from 'rxjs/operators';
import { Profile } from '../../core/models/profile';
import { isHttp } from '../../constants/utils';

@Injectable({
  providedIn: 'root'
})
export class BooksResolverService implements Resolve<Book[]> {

  directory = 'content/book';

  constructor(private contentService: ContentService) { }

  getImageSource(book: Book): {sm: string, lg: string}[] {
    let result: {sm: string, lg: string}[] = [];
    if (Array.isArray(book.images) && book.images.length > 0) {
      result = book.images.map((image: {sm: string, lg: string}) => {
        return {
          sm: `assets/${this.directory}/${book.slug}/${image.sm}`,
          lg: `assets/${this.directory}/${book.slug}/${image.lg}`
        };
      });
    }
    return result;
  }

  getSourceLink(book: Book): string {
    return `assets/${this.directory}/${book.slug}/${book.pdfLink}`;
  }

  toBook(item: Params): Book {
    return {
      title: item.title,
      amazonLink: item.amazonLink,
      pdfLink: item.pdfLink,
      publisher: item.publisher,
      author: item.author,
      body: item.body,
      slug: toSlug(item.title),
      images: item.bookImages
    };
  }

  toBookUI(book: Book): Book {
    book.images = this.getImageSource(book);
    if (book.pdfLink) {
      if (!isHttp(book.pdfLink)) {
        book.pdfLink = this.getSourceLink(book);
      }
    }
    return book;
  }

  resolve(): Observable<Book[]> | Observable<never> {
    const books$ = this.contentService.getIndex<Params>('books').pipe(
      take(1),
      shareReplay()
    );

    const person$ = books$.pipe(
      map((items: Params[]) => {
        let slugs: string[] = [];
        items.forEach((item: Params) => {
          item.author.forEach((author: string) => {
            if (!slugs.includes(author)) {
              slugs = [...slugs, author];
            }
          });
        });
        // ['s1', 's2']
        return slugs;
      }),
      mergeMap((slugs: string[]) => {
        const forkJoins: Observable<Params>[] = slugs.map((slug: string) => {
          // {'s1': {}}, {'s2': {}}
          return this.contentService.getContent<Params>(`person/${slug}`).pipe(
            take(1),
            map((result: Params) => {
              return {
                [slug]: result
              };
            })
          );
        });
        // [ {'s1': {}}, {'s2': {}} ]
        return forkJoin(forkJoins);
      }),
      map((array: Params[]) => {
        const result = {};
        array.forEach(element => {
          Object.assign(result, element);
        });
        // {'s1': {}, 's2': {}}
        return result;
      })
    );
    // Combine
    return combineLatest([person$, books$]).pipe(
      map((result: Params[]) => {
        const [people, books] = result;
        return books.filter((book: Params) => {
          return book.title;
        }).map((bookParams: Params) => {
          const authorNames: string[] = bookParams.author
          .map((slug: string) => {
            let authorName;
            if (people.hasOwnProperty(slug) && people[slug]) {
              const profile: Profile = people[slug];
              if (profile) {
                authorName = profile.name;
              }
            }
            return authorName;
          }).filter((author: string | undefined) => author);

          const book =  this.toBook({...bookParams, author: authorNames.join(', ')});
          return this.toBookUI(book);
        });
      })
    );
  }
}
