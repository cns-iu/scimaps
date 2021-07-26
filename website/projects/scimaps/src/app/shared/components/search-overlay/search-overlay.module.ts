import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchOverlayComponent } from './search-overlay.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [SearchOverlayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [SearchOverlayComponent]
})
export class SearchOverlayModule { }
