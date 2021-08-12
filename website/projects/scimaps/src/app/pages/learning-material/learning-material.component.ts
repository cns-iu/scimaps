import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { drawerInOut } from '../../constants/drawer.animations';
import { LearningMaterial } from '../hosting/learning-materials-resolver.service';

@Component({
  selector: 'sci-learning-material',
  templateUrl: './learning-material.component.html',
  styleUrls: ['./learning-material.component.scss'],
  animations: [drawerInOut]
})
export class LearningMaterialComponent implements OnInit {

  item!: LearningMaterial;
  showDrawer = false;
  constructor(private router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((response: Params) => {
      const { learningMaterial } = response;
      if (learningMaterial) {
        this.item = learningMaterial;
      }
    });
    this.showDrawer = true;
  }

  goBack(): void {
    this.showDrawer = false;
    setTimeout(() => {
      this.router.navigate(['/hosting'], {state: {direction: 'backward'}});
    }, 500);
  }
}
