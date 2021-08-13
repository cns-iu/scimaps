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
    title: 'Visual Analytics Certificate',
    subtitle: 'Sept 20-Oct 30, 2022',
    body: 'A six-week online course focused on understanding and creating data visualizations that translate complex data into actionable insights.',
    buttonLabel: 'Register',
    buttonLink: 'https://expand.iu.edu/browse/sice/cns/courses/visual-analytics-0921-open',
    imageSource: 'assets/action-card/image1.jpg'
  };
}
