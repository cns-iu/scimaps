import { Component, HostBinding } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'sci-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss']
})
export class PurchaseModalComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-purchase-modal';

  /**
   * Whether the confirmation screen has been reached
   */
  confirmation = false;

  constructor(public dialogRef: MatDialogRef<PurchaseModalComponent>) { }

  /**
   * Closes info dialog component
   */
  close(): void {
    this.dialogRef.close();
  }

  /**
   * Opens the confirmation screen when send button is clicked
   */
  buttonClickSend(): void {
    this.confirmation = true;
  }

}
