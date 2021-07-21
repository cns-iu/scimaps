import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';

@Component({
  selector: 'sci-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {

  @Input() items: Params[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
