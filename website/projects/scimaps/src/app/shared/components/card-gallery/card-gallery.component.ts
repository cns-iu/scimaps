import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageCardItem } from '../../../core/models/image-card-item';

@Component({
  selector: 'sci-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.scss']
})
export class CardGalleryComponent {
  @Input() cards!: ImageCardItem[];
  @Input() directory!: string;
  @Output() cardClicked = new EventEmitter<void>();

  getImageSource(slug: string): string {
    return `assets/${this.directory}/${slug}/image.png`;
  }

  handleClick(card: ImageCardItem): void {
    this.cardClicked.emit();
  }
}
