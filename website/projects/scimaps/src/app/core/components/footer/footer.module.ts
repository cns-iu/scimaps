import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FooterComponent } from './footer.component';


@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule { }
