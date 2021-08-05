import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { drawerInOut } from '../../../constants/drawer.animations';
import { SetAppState } from '../../../core/actions/app.actions';
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

  constructor(private activatedRoute: ActivatedRoute, private readonly dialog: MatDialog, private router: Router, private store: Store) { }
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

  openDrawer(item: Params): void {
    this.store.dispatch(new SetAppState({drawer: {
      showDrawer: true,
      drawerName: 'makers-drawer',
      drawerPayload: item
    }}));
  }

  redirect(link: string) {
    if (link) {
      window.open(link, '_blank');
    }
  }
}
