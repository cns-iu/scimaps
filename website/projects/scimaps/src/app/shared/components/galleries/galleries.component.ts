import { Component, Input, OnInit } from '@angular/core';
import { Gallery } from '../../../pages/venues/galleries-resolver.service';

@Component({
  selector: 'sci-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {

  @Input() items: Gallery[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
