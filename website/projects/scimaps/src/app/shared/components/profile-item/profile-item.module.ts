import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileItemComponent } from './profile-item.component';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [ProfileItemComponent],
  imports: [
    CommonModule,
    MarkdownModule,
    SharedModule
  ],
  exports: [ProfileItemComponent]
})
export class ProfileItemModule { }
