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
    title: 'Atlas of Forecasts: Modeling and Mapping Desirable Futures.',
    subtitle: '',
    body: 'A new book from Katy Börner! This third book in the series focuses on using models and visualizations to help society envision and create the future we want.',
    buttonLabel: 'Purchase',
    buttonLink: 'https://www.amazon.com/Atlas-Forecasts-Modeling-Mapping-Desirable/dp/0262045958/ref=[…]&keywords=borner+atlas+forecast&qid=1620409272&s=books&sr=1-1',
    imageSource: 'assets/action-card/cta-atlas-of-forecasts.jpg'
  };
}
