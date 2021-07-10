import { Component, Input, OnInit } from '@angular/core';
import { drawerInOut } from '../../../constants/drawer.animations';
import { LearningMaterial } from '../../../pages/hosting/learning-material-resolver.service';

@Component({
  selector: 'sci-learning-material-item',
  templateUrl: './learning-material-item.component.html',
  styleUrls: ['./learning-material-item.component.scss'],
  animations: [drawerInOut]
})
export class LearningMaterialItemComponent implements OnInit {

  @Input() item!: LearningMaterial;

  showDrawer = false;
  constructor() { }

  ngOnInit(): void {
  }

}
