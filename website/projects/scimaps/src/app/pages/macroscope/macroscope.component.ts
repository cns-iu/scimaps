import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MapMacroscopeItem } from '../../core/models/discover-item';

@Component({
  selector: 'sci-macroscope',
  templateUrl: './macroscope.component.html',
  styleUrls: ['./macroscope.component.scss']
})
export class MacroscopeComponent implements OnInit, OnDestroy {

  selectedItem!: MapMacroscopeItem;

  currentLanguage = 'en';

  private subscriptionA?: Subscription;
  private subscriptionB?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subscriptionA = this.route.data.subscribe((data) => {
      this.selectedItem = data.macroscope;
    });
    this.subscriptionB = this.route.queryParamMap.subscribe((params) => {
      this.currentLanguage = params.get('lang') || 'en';
    });
  }

  changeLanguage(language: string): void {
    const iteration = this.route.snapshot.paramMap.get('iteration');
    const sequence = this.route.snapshot.paramMap.get('sequence');
    this.router.navigate(['/', 'macroscope', iteration, sequence], { queryParams: {lang: language} });
  }

  /**
   * Unsubscribe from Observables
   */
  ngOnDestroy(): void {
    this.subscriptionA?.unsubscribe();
    this.subscriptionB?.unsubscribe();
  }
}
