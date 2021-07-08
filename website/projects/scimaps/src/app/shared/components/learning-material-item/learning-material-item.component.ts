import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sci-learning-material-item',
  templateUrl: './learning-material-item.component.html',
  styleUrls: ['./learning-material-item.component.scss']
})
export class LearningMaterialItemComponent implements OnInit {

  @Input() item!: {
    title: string,
    content: string,
    image: {
      lg:string,
      sm: string
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
