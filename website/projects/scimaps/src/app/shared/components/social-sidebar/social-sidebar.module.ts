import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialSidebarComponent } from './social-sidebar.component';

import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [SocialSidebarComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [SocialSidebarComponent]
})
export class SocialSidebarModule { }
