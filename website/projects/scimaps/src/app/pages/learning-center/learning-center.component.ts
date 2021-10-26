import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sci-learning-center',
  templateUrl: './learning-center.component.html',
  styleUrls: ['./learning-center.component.scss']
})
export class LearningCenterComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
  }

}
