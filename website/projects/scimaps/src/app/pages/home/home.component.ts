import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionCardItem } from '../../core/models/action-card-item';


@Component({
  selector: 'sci-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-home';

  bgStyle = {
    'background-image': 'url(assets/images/home/image01.png)'
  };
  testActionItem!: ActionCardItem;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const {homeBody} = this.activatedRoute.snapshot.data;
    console.log(this.activatedRoute)
    if (homeBody && homeBody.hasOwnProperty('cta')) {
      this.testActionItem = homeBody.cta;
    }
  }
}
