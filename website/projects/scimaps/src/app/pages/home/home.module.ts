import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SocialSidebarModule } from '../../shared/components/social-sidebar/social-sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SocialSidebarModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
