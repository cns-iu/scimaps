import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { MapItem } from '..//discover-listing/discover-item';

@Component({
  selector: 'sci-item-drawer',
  templateUrl: './item-drawer.component.html',
  styleUrls: ['./item-drawer.component.scss']
})
export class ItemDrawerComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-item-drawer';

  @Input() item: MapItem = {
    title: 'Sample Map Item',
    makers: ['Homer Simpson', 'Elon Musk'],
    location: 'Springfield',
    credit: 'Credit line text',
    year: '2000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo. Pellentesque ultrices blandit diam quis pretium. Suspendisse ut ante in enim consequat semper id consectetur arcu. Proin ultricies vestibulum nulla sit amet.',
    references: [
      'Reference 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam.',
      'Reference 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam.',
      'Reference 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam.'
    ],
    thumbnail: '../../../assets/maps/maps-2019/rose.jpg'
  };

  @Output() closeDrawer = new EventEmitter();

  @Output() languageChange = new EventEmitter<string>();

  selectedLanguage = 'English';

  get makers(): string {
    return this.item.makers.join(', ');
  }

  close(): void {
    this.closeDrawer.emit();
  }

  languageSelect(language: string): void {
    this.selectedLanguage = language;
    this.languageChange.emit(language);
  }
}
