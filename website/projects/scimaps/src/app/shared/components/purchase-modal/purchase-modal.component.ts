import { Component, HostBinding, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'sci-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss']
})
export class PurchaseModalComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-warning-dialog';

  constructor(public dialogRef: MatDialogRef<PurchaseModalComponent>) { }

  /**
   * Closes info dialog component
   */
  close(): void {
    this.dialogRef.close();
  }

  buttonClickHandler(): void {
    this.close();
  }

}
