import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MapMacroscopeItem } from '../../../core/models/discover-item';
import { PurchaseModalComponent } from '../purchase-modal/purchase-modal.component';

/**
 * Drawer that opens when a map or macroscope item is selected
 */
@Component({
  selector: 'sci-item-drawer',
  templateUrl: './item-drawer.component.html',
  styleUrls: ['./item-drawer.component.scss']
})
export class ItemDrawerComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-item-drawer';

  /**
   * Type of item displayed
   */
  @Input() type!: 'map' | 'macroscope';

  /**
   * Item to be displayed in the drawer
   */
  @Input() item!: MapMacroscopeItem;

  /**
   * Emits the selected language when the language changes
   */
  @Output() languageChange = new EventEmitter<string>();

  /**
   * Currently selected language
   */
  selectedLanguage = 'en';

  /** Whether the subdrawer containing maker info is open */
  showSubdrawer = false;

  constructor(private readonly dialog: MatDialog, private router: Router) { }

  /**
   * Combines the maker names
   */
  get makers(): string {
    return this.item.makers.map(maker => maker.name).join(', ');
  }

  /**
   * Closes item drawer component and returns to the maps or macroscopes page
   */
  close(): void {
    this.router.navigate(['/', this.type+'s']);
  }

  /**
   * Sets selectedLanguage to selected language and emits the new language
   * @param language The language selected
   */
  languageSelect(language: string): void {
    this.selectedLanguage = language;
    this.languageChange.emit(language);
  }

  /**
   * Opens purchase modal
   */
  openPurchase(): void {
    this.dialog.open(PurchaseModalComponent, {
      width: window.innerWidth <= 768 ? '100%' : '738px'
    });
  }

  /** Opens the maker subdrawer */
  openSubdrawer(): void {
    this.showSubdrawer = true;
  }

  /** Closes the maker subdrawer */
  closeSubdrawer(): void {
    this.showSubdrawer = false;
  }
}
