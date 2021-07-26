import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from './accordian.component';
import { MarkdownModule } from 'ngx-markdown';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [AccordianComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MarkdownModule
  ],
  exports: [AccordianComponent]
})
export class AccordianModule { }
