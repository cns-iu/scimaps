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

  testActionItem: ActionCardItem = {
    title: 'Visual Analytics Certificate',
    subtitle: 'Sept 20-Oct 30, 2022',
    body: 'A six-week online course focused on understanding and creating data visualizations that translate complex data into actionable insights.',
    buttonLabel: 'Register',
    buttonLink: 'https://visanalytics.cns.iu.edu/',
    imageSource: 'assets/action-card/image1.jpg'
  };
}
