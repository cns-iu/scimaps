import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile.component';
import { DrawerModule } from '../drawer/drawer.module';
import { DrawerHeaderModule } from '../drawer-header/drawer-header.module';



@NgModule({
  declarations: [TileComponent],
  imports: [
    CommonModule,
    DrawerModule,
    DrawerHeaderModule
  ],
  exports: [TileComponent]
})
export class TileModule { }
