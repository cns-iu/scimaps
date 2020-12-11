import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseModalComponent } from './purchase-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PurchaseModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [PurchaseModalComponent]
})
export class PurchaseModalModule { }
