import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sci-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})
export class AccordianComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-accordian';

  @Input() header = '';
  @Input() content = '';

  constructor() {}
  ngOnInit(): void {}
}
