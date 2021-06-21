import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../../core/models/profile';

@Component({
  selector: 'sci-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss']
})
export class ProfileItemComponent implements OnInit {

  @Input() profile!: Profile;
  @Input() compact = true;

  constructor() { }

  ngOnInit(): void {
  }

}
