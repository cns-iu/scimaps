import { Component, Input, HostBinding } from '@angular/core';
import { NewsItem } from './news-item.model';

/**
 * Displays a news item
 */
@Component({
  selector: 'sci-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {

  @HostBinding('class') readonly clsName = 'sci-news-item';

   /**
    * News item info
    */
   @Input() item!: NewsItem;
}
