import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ActionCardModule } from '../../shared/components/action-card/action-card.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ActionCardModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
