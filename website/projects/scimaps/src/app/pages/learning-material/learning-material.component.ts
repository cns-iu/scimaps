import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LearningMaterial } from '../hosting/learning-materials-resolver.service';

@Component({
  selector: 'sci-learning-material',
  templateUrl: './learning-material.component.html',
  styleUrls: ['./learning-material.component.scss']
})
export class LearningMaterialComponent implements OnInit {

  item!: LearningMaterial;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.data.subscribe((response: Params) => {
      const { learningMaterial } = response;
      if (learningMaterial) {
        this.item = learningMaterial
      }
    })
  }
}
