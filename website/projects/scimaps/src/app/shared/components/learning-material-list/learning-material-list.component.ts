import { Component, HostBinding, Input } from '@angular/core';
import { LearningMaterial } from '../../../pages/hosting/learning-materials-resolver.service';

@Component({
  selector: 'sci-learning-material-list',
  templateUrl: './learning-material-list.component.html',
  styleUrls: ['./learning-material-list.component.scss'],
})
export class LearningMaterialListComponent {
  @HostBinding('class') readonly classname = 'sci-learning-material-list';

  @Input() items: LearningMaterial[] = [];
  @Input() header = '';
}
