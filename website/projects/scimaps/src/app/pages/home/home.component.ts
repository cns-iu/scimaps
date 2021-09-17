import { Component, HostBinding } from '@angular/core';
import { ActionCardItem } from '../../core/models/action-card-item';


@Component({
  selector: 'sci-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-home';

  bgStyle = {
    'background-image': 'url(assets/images/home/image01.png)'
  };
  testActionItem: ActionCardItem = {
    title: 'Places & Spaces 17th Iteration Debut at Notre Dame.',
    subtitle: '',
    body: 'The 17th Iteration of the Places & Spaces exhibit launches on Sept 24 at the University of Notre Dame. Register here to join a virtual talk by Curator Katy Borner and virtual tour of the new macroscopes with co-Curator Todd Theriault.',
    buttonLabel: 'Register',
    buttonLink: 'https://library.nd.edu/events',
    imageSource: 'assets/action-card/actioncard.jpg'
  };
}
