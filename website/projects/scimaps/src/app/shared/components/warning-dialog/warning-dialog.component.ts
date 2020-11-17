import { HostBinding, Inject } from '@angular/core';
import { Component, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface WarningDialogData {
  closeLink?: string;
  warningMessage?: string;
}

@Component({
  selector: 'sci-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.scss']
})
export class WarningDialogComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-warning-dialog';

  closeLink = '';
  warningMessage = '';

  constructor(
    public dialogRef: MatDialogRef<WarningDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WarningDialogData
  ) {
    if (data.closeLink) {
      this.closeLink = data.closeLink;
    }

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
    if (this.closeLink !== '') {
      console.log('closelink: ', this.closeLink);
      window.open(this.closeLink, '_blank');
    } else {
      this.close();
    }
  }
}
