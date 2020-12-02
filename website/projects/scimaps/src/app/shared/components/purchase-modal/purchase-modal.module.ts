import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseModalComponent } from './purchase-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [PurchaseModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [PurchaseModalComponent]
})
export class PurchaseModalModule { }
