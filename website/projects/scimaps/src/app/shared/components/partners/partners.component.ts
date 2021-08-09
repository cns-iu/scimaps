import { Component } from '@angular/core';

@Component({
  selector: 'sci-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  data: { name: string; logo: string; link: string }[] = [
    {
      name: 'CNS',
      logo: 'assets/logos/logo-cns.svg',
      link: 'https://cns.iu.edu',
    },
    {
      name: 'Luddy',
      logo: 'assets/logos/logo-luddy-school.svg',
      link: 'https://luddy.indiana.edu/index.html',
    },
    {
      name: 'McDonnel',
      logo: 'assets/logos/logo-james-s-mcdonnell-foundation.svg',
      link: 'https://www.jsmf.org/',
    },
    {
      name: 'reuters',
      logo: 'assets/logos/logo-thomson-reuters.svg',
      link: 'https://thomsonreuters.com/',
    },
    {
      name: 'NSF',
      logo: 'assets/logos/logo-nsf.svg',
      link: 'https://www.nsf.gov/',
    },
    {
      name: 'elsevier',
      logo: 'assets/logos/logo-elsevier.svg',
      link: 'https://www.elsevier.com/',
    },
  ];

  openLink(link: string): void {
    window.open(link, '_blank');
  }

}
