import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnimationEvent } from '@angular/animations';
import { isSearchOpenTrigger } from '../../../constants/drawer.animations';
import { of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'sci-search-overlay',
  templateUrl: './search-overlay.component.html',
  styleUrls: ['./search-overlay.component.scss'],
  animations: [isSearchOpenTrigger]
})
export class SearchOverlayComponent implements OnInit, OnDestroy {
  @HostBinding('class') readonly clsName = 'sci-search-overlay';

  @Input() search: string = '';
  @ViewChild('searchInput') searchInput: ElementRef | undefined;  // needed for focus.\
  @Output() searchChange: EventEmitter<string> = new EventEmitter();

  isSearchOpen = false;
  searchChangeSubscription: Subscription | undefined;
  searchForm!: FormGroup

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

  ngOnDestroy() {
    if (this.searchChangeSubscription) {
      this.searchChangeSubscription.unsubscribe();
    }
  }
}
