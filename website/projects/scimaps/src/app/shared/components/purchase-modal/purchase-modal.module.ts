import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseModalComponent } from './purchase-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [PurchaseModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [PurchaseModalComponent]
})
export class PurchaseModalModule { }
