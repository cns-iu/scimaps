import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileItemComponent } from './profile-item.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [ProfileItemComponent],
  imports: [
    CommonModule,
    MarkdownModule
  ],
  exports: [ProfileItemComponent]
})
export class ProfileItemModule { }
