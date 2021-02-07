import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MapMacroscopeItem } from '../../core/models/discover-item';


/**
 * Component to displaying individual macroscope items
 */
@Component({
  selector: 'sci-macroscope',
  templateUrl: './macroscope.component.html'
})
export class MacroscopeComponent implements OnInit, OnDestroy {
  /**
   * The current item displayed
   */
  selectedItem!: MapMacroscopeItem;

  /**
   * Selected language
   */
  currentLanguage = 'en';

  private subscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data) => {
      this.selectedItem = data.macroscope;
    });
  }

  /**
   * Changes selected language and navigates to new language route
   * @param language selected language
   */
  changeLanguage(language: string): void {
    const iteration = this.route.snapshot.paramMap.get('iteration');
    const sequence = this.route.snapshot.paramMap.get('sequence');
    this.router.navigate(['/', 'macroscope', iteration, sequence], { queryParams: {lang: language} });
  }

  /**
   * Unsubscribe from Observables
   */
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
