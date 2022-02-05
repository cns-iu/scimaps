import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MacroscopeRoutingModule } from './macroscope-routing.module';
import { MacroscopeComponent } from './macroscope.component';
import { ItemDrawerModule } from '../../shared/components/item-drawer/item-drawer.module';
import { MakerVideoModule } from '../../shared/components/maker-video/maker-video.module';
import { MacroscopeDetailComponent } from './macroscope-detail/macroscope-detail.component';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';

@NgModule({
  declarations: [MacroscopeComponent, MacroscopeDetailComponent],
  imports: [
    CommonModule,
    MakerVideoModule,
    MacroscopeRoutingModule,
    ItemDrawerModule,
    DrawerModule
  ]
})
export class MacroscopeModule { }
