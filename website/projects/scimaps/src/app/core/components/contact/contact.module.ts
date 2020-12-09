import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ContactComponent } from './contact.component';


@NgModule({
  imports: [
    CommonModule,

    MatIconModule
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule { }
