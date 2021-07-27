import { Component, Input } from '@angular/core';
import { drawerInOut } from '../../../constants/drawer.animations';
import { LearningMaterial } from '../../../pages/hosting/learning-materials-resolver.service';

@Component({
  selector: 'sci-learning-material-item',
  templateUrl: './learning-material-item.component.html',
  styleUrls: ['./learning-material-item.component.scss'],
  animations: [drawerInOut]
})
export class LearningMaterialItemComponent {

  @Input() item!: LearningMaterial;

  showDrawer = false;
}
