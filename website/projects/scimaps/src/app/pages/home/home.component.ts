import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  actionCard!: ActionCardItem;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.activatedRoute.data.subscribe((response: Params) => {
      const {homeBody} = response;
      if (homeBody && homeBody.hasOwnProperty('cta')) {
        this.actionCard = homeBody.cta;
      }
    });
  }
}
