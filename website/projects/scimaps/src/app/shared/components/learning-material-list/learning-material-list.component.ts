import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sci-learning-material-list',
  templateUrl: './learning-material-list.component.html',
  styleUrls: ['./learning-material-list.component.scss']
})
export class LearningMaterialListComponent implements OnInit {

  @HostBinding('class') readonly classname = 'sci-learning-material-list';
  
  @Input() items: any[] = []
  @Input() header = '';

  constructor() { }

  ngOnInit(): void {
  }

}
