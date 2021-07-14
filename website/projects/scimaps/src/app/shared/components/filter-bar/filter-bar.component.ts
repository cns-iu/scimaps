import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { AnimationEvent } from '@angular/animations';
import { isSearchOpenTrigger } from '../../../constants/drawer.animations';

@Component({
  selector: 'sci-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  animations: [isSearchOpenTrigger]
})
export class FilterBarComponent implements OnInit, OnDestroy {

  @ViewChild('searchInput') searchInput: ElementRef | undefined;  // needed for focus.
  
  @Input() yearList: string[] = []
  @Output() yearChange: EventEmitter<any> = new EventEmitter();
  @Output() searchChange: EventEmitter<any> = new EventEmitter();
  
  searchForm!: FormGroup
  searchChangeSubscription: Subscription | undefined;
  yearChangeSubscription: Subscription | undefined;
  isSearchOpen = false;

  get searchControl(): AbstractControl | undefined {
    let result: AbstractControl | undefined;
    if (this.searchForm) {
      const searchControl = this.searchForm.get('search');
      if (searchControl) {
        result = searchControl;
      }
    }
    return result;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

     // Initialize form
    this.searchForm = this.formBuilder.group({
      year: this.formBuilder.control(''),
      search: this.formBuilder.control('')
    });
    // Initialize listener for search input change
    this.searchChangeSubscription = this.searchForm.get('search')?.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map((searcKey: string) => {
        return searcKey.trim().toLowerCase();
      }),
      switchMap((searchKey: string) => {
        return of(searchKey);
      })
    ).subscribe((searchKey: string) => {
      const year = this.searchForm.get('year')?.value;
      const filter = JSON.stringify({ year, searchKey });
      this.searchChange.emit(filter);
    });

    // Initalize listener for year dropdown change
    this.yearChangeSubscription = this.searchForm.get('year')?.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((year: string) => {
        return of(year);
      })
    ).subscribe((year: string) => {
      let searchKey = this.searchForm.get('search')?.value;
      searchKey = searchKey.trim().toLowerCase();
      const filter = JSON.stringify({ year, searchKey });
      this.yearChange.emit(filter);
    });
  }

  // After Animation hook
  afterAnimation(event: AnimationEvent): void {
    if (event.fromState === 'void') {
      if (this.searchInput) {
        this.searchInput.nativeElement.focus();
      }
    }
  }

  clearSearch(): void {
    if (this.searchControl) {
      this.searchControl.setValue('');
    }
  }

  ngOnDestroy(): void {
    if (this.searchChangeSubscription) {
      this.searchChangeSubscription.unsubscribe();
    }
    if (this.yearChangeSubscription) {
      this.yearChangeSubscription.unsubscribe();
    }
  }
}
