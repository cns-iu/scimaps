import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import frontMatter from 'front-matter';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import slugify from 'slugify';


export function toSlug(str: string): string {
  return slugify(str, {lower: true, strict: true});
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getIndex<T = unknown>(indexName: string): Observable<T[]> {
    if (!indexName.endsWith('.json')) {
      indexName += '.json';
    }
    return this.http.get<T[]>(`assets/indexes/${indexName}`);
  }

  getContent<T = unknown>(contentPath: string, bodyAttribute = 'body'): Observable<T> {
    if (!contentPath.endsWith('.md')) {
      if (!contentPath.endsWith('/readme')) {
        contentPath += '/readme.md';
      } else {
        contentPath += '.md';
      }
    }
    return this.http.get(`assets/content/${contentPath}`, { responseType: 'text' }).pipe(
      map<string, T>((body) => {
        const data = frontMatter(body);
        if (data.body) {
          Object.assign(data.attributes, {[bodyAttribute]: data.body});
        }
        return data.attributes as T;
      })
    );
  }
}
