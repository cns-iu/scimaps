import { Component, Input, OnInit } from '@angular/core';
import { LearningMaterial } from '../../../pages/hosting/learning-material-resolver.service';

@Component({
  selector: 'sci-learning-material-item',
  templateUrl: './learning-material-item.component.html',
  styleUrls: ['./learning-material-item.component.scss']
})
export class LearningMaterialItemComponent implements OnInit {

  @Input() item!: LearningMaterial;

  constructor() { }

  ngOnInit(): void {
  }

}
