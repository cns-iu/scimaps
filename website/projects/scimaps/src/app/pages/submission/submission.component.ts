import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MapMacroscopeItem } from '../../core/models/discover-item';

@Component({
  selector: 'sci-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit, OnDestroy {

  /**
   * The current item displayed
   */
  selectedItem!: MapMacroscopeItem;

  /**
   * Selected language
   */
  currentLanguage = 'en';

  private subscription?: Subscription;

  constructor(private route: ActivatedRoute) {}

  submission = {};

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      const { submission } = data;
      console.log(submission);
      if (submission) {
        this.selectedItem = submission;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
