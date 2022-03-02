import { Component, Input } from '@angular/core';

@Component({
  selector: 'sci-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  @Input() url = '';
}
