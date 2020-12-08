import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ActionCardModule } from '../../shared/components/action-card/action-card.module';
import { SocialSidebarModule } from '../../shared/components/social-sidebar/social-sidebar.module';


@NgModule({
  imports: [
    CommonModule,
    
    HomeRoutingModule,
    ActionCardModule
    SocialSidebarModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
