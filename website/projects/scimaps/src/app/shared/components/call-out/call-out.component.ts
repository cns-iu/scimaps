import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'sci-call-out',
  templateUrl: './call-out.component.html',
  styleUrls: ['./call-out.component.scss']
})
export class CallOutComponent {
  /** HTML class */
  @HostBinding('class') readonly clsName = 'sci-call-out';
  @Input() title!: string;
  @Input() items!: Array<[string, string]>;
}
