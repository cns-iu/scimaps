import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sci-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
  submission = {};

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data)
      const {submission} = data;
      if (submission) {
        this.submission = submission
      }
    });
  }
}
