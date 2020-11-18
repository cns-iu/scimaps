import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningDialogComponent } from './warning-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [WarningDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [WarningDialogComponent]
})
export class WarningDialogModule { }