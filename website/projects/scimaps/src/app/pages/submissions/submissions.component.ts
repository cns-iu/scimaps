import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DiscoverItem } from '../../core/models/discover-item';

@Component({
  selector: 'sci-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit, OnDestroy {

  submissions: DiscoverItem[] = [];
  dataSubscription: Subscription | undefined;

  thumbnails = [];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    if (this.route.data) {
      this.dataSubscription = this.route.data.subscribe((data) => {
        const { submissions } = data;
        if (submissions) {
          this.submissions = submissions;
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
