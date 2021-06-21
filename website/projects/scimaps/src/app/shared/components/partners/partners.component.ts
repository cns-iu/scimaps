import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sci-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  @Input() data: {name: string, logo: string, link: string}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  openLink(link: string): void {
    window.open(link, '_blank');
  }

}
