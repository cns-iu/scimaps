import { Component, Input } from '@angular/core';
import { NewsItem } from '../core/models/news-item';

/**
 * Displays a news item
 */
@Component({
  selector: 'sci-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {

   /**
    * News item info
    */
   @Input() item!: NewsItem;
}
