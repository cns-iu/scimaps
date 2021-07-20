import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { Gallery } from '../../../pages/venues/galleries-resolver.service';

@Component({
  selector: 'sci-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() item!: Gallery | Params;
  constructor() { }

  showOverlay = false;
  overlayImage = '';
  ngOnInit(): void {
    console.log(this.item);
  }

}
