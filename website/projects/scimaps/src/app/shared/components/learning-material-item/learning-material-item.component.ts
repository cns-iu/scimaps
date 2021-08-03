import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { drawerInOut } from '../../../constants/drawer.animations';
import { LearningMaterial } from '../../../pages/hosting/learning-materials-resolver.service';

@Component({
  selector: 'sci-learning-material-item',
  templateUrl: './learning-material-item.component.html',
  styleUrls: ['./learning-material-item.component.scss'],
  animations: [drawerInOut]
})
export class LearningMaterialItemComponent {

  @Input() item: LearningMaterial = {} as LearningMaterial;

  constructor(private router: Router) {}

  gotoLearningMaterial(): void {
    if (this.item?.slug) {
      this.router.navigate(['/', 'learning-material', this.item.slug]);
    }
  }
}
