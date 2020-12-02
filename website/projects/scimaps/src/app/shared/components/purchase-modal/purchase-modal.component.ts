import { Component, HostBinding, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface PurchaseModalData {
  closeLink?: string;
  warningMessage?: string;
}

@Component({
  selector: 'sci-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss']
})
export class PurchaseModalComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-warning-dialog';

  warningMessage = '';

  constructor(
    public dialogRef: MatDialogRef<PurchaseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PurchaseModalData
  ) {

    if (data.warningMessage) {
      this.warningMessage = data.warningMessage;
    }
  }

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
