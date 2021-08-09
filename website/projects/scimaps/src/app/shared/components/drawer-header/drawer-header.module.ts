import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerHeaderComponent } from './drawer-header.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [DrawerHeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [DrawerHeaderComponent]
})
export class DrawerHeaderModule { }
