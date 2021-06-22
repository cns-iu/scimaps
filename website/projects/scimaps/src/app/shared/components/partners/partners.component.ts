import { Component, Input } from '@angular/core';

@Component({
  selector: 'sci-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {

  @Input() data: {name: string, logo: string, link: string}[] = [];

  openLink(link: string): void {
    window.open(link, '_blank');
  }

}
