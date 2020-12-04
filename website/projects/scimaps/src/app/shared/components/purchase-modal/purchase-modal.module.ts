import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseModalComponent } from './purchase-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [PurchaseModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [PurchaseModalComponent]
})
export class PurchaseModalModule { }
