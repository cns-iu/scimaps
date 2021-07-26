import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'sci-accordian',
  templateUrl: './accordian.component.html'
})
export class AccordianComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-accordian';

  @Input() header = '';
  @Input() content = '';
}
