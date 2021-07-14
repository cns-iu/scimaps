import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'sci-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnDestroy {

  selectForm!: FormGroup;
  @Input() select = '';
  @Input() options: string[] = [];
  @Output() selectChange: EventEmitter<string> = new EventEmitter();

  selectChangeSubscription: Subscription | undefined;

  get selectControl(): AbstractControl | undefined {
    let result: AbstractControl | undefined;
    if (this.selectForm) {
      const searchControl = this.selectForm.get('select');
      if (searchControl) {
        result = searchControl;
      }
    }
    return result;
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Initialize form
    this.selectForm = this.formBuilder.group({
      select: this.formBuilder.control(this.select)
    });
    // Initalize listener for year dropdown change
    this.selectChangeSubscription = this.selectControl?.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((year: string) => {
        return of(year);
      })
    ).subscribe((year: string) => {
      this.selectChange.emit(year);
    });
  }

  ngOnDestroy() {
    if (this.selectChangeSubscription) {
      this.selectChangeSubscription.unsubscribe();
    }
  }
}
