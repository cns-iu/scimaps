import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { drawerInOut } from '../../../constants/drawer.animations';
import { MapMacroscopeItem } from '../../../core/models/discover-item';
import { PurchaseModalComponent } from '../purchase-modal/purchase-modal.component';

/**
 * Drawer that opens when a map or macroscope item is selected
 */
@Component({
  selector: 'sci-item-drawer',
  templateUrl: './item-drawer.component.html',
  styleUrls: ['./item-drawer.component.scss'],
  animations: [drawerInOut]
})
export class ItemDrawerComponent implements OnInit {
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
  showDrawer = false;

  makersDrawer = false;
  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.showDrawer = true;
  }

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
    this.showDrawer = false;
    setTimeout(() => {
      this.router.navigate(['/', this.type + 's']);
    }, 500);
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

  redirect(link: string): void {
    if (this.type === 'map') {
      this.router.navigate(['detail'], {relativeTo: this.route});
    } else if (this.type === 'macroscope') {
      if (link) {
        window.open(link, '_blank');
      }
    }
  }
}
