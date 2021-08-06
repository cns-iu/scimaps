import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewComponent } from './tab-view.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [TabViewComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class TabViewModule { }
