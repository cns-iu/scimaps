import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '../../../shared/shared.module';
import { ContactComponent } from './contact.component';


@NgModule({
  imports: [
    CommonModule,

    MatIconModule,

    SharedModule
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule { }
