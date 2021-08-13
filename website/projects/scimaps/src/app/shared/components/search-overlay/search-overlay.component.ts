import { Component, ElementRef, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { isSearchOpenTrigger } from '../../../constants/search-overlay.animation';

@Component({
  selector: 'sci-search-overlay',
  templateUrl: './search-overlay.component.html',
  styleUrls: ['./search-overlay.component.scss'],
  animations: [isSearchOpenTrigger]
})
export class SearchOverlayComponent implements OnInit, OnDestroy {
  @HostBinding('class') readonly className = 'sci-search-overlay';

  @Input() search = '';
  @ViewChild('searchInput') searchInput: ElementRef | undefined;  // needed for focus.\
  @Output() searchChange: EventEmitter<string> = new EventEmitter();

  isSearchOpen = true;
  searchChangeSubscription: Subscription | undefined;
  searchForm!: FormGroup;

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
      search: this.formBuilder.control(this.search)
    });

    // Initialize listener for search input change
    this.searchChangeSubscription = this.searchControl?.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map((searcKey: string) => {
        return searcKey.trim().toLowerCase();
      }),
      switchMap((searchKey: string) => {
        return of(searchKey);
      })
    ).subscribe((searchKey: string) => {
      this.searchChange.emit(searchKey);
    });
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
  }
}
