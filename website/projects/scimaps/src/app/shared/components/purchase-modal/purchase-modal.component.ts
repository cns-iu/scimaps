import { Component, HostBinding } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { FormControl, Validators } from '@angular/forms';

export interface PurchaseFormInfo {
  firstName: string;
  lastName: string;
  shipAddress: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'sci-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss']
})
export class PurchaseModalComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-purchase-modal';

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  zip = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);

  /**
   * Whether the confirmation screen has been reached
   */
  confirmation = false;

  /**
   * Current form inputs
   */
  currentInfo: PurchaseFormInfo = {
    firstName: '',
    lastName: '',
    shipAddress: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
  };

  /**
   * Email link
   */
  mailLink = '';

  /**
   * Shipping info (body of email)
   */
  shipInfo = '';

  /**
   * Where the email will be sent
   */
  receivingEmail = 'cnscntr@iu.edu';

  /**
   * State options
   */
  states = [
    'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia',
    'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands',
    'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
    'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];


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
    if (this.allValid()) {
      this.confirmation = true;
    }
  }

  /**
   * Updates the current form inputs (excluding state)
   * @param input the input event
   * @param key Key to be updated
   */
  change(target: EventTarget | null, key: string): void {
    const inputTarget = target as HTMLInputElement;
    this.currentInfo = target ? { ...this.currentInfo, [key]: inputTarget.value } : this.currentInfo;
    this.updateMailLink();
  }

  /**
   * Updates the selected state
   * @param event Selected state
   */
  stateChange(event: MatSelectChange): void {
    this.currentInfo = { ...this.currentInfo, state: event.value };
    this.updateMailLink();
  }

  /**
   * Updates ship info portion of form
   * @param event Input event
   */
  updateShipInfo(target: EventTarget | null): void {
    const inputTarget = target as HTMLTextAreaElement;
    this.shipInfo = target ? inputTarget.value.split('\n').join('%0D%0A') : this.shipInfo;
    this.updateMailLink();
  }

  /**
   * Updates mail link
   */
  updateMailLink(): void {
    this.mailLink = `mailto:${this.receivingEmail}?subject=Map%20Purchase&body=`;
    const mailName = `Name: ${this.currentInfo.firstName} ${this.currentInfo.lastName}`;
    const mailAddress = `Address: ${this.currentInfo.shipAddress}, ${this.currentInfo.city}, ${this.currentInfo.state}, ${this.currentInfo.zip}`;
    const mailEmail = `Email: ${this.currentInfo.email}`;
    const mailPhone = `Phone: ${this.currentInfo.phone}`;
    this.mailLink = this.mailLink.concat(
      [mailName, mailAddress, mailEmail, mailPhone].join('%0D%0A')
    ).concat(`%0D%0A%0D%0A${this.shipInfo}`);
  }

  allValid(): boolean {
      if (this.email.hasError('email') || this.email.hasError('required') || this.firstName.hasError('required') ||
      this.lastName.hasError('required') || this.address.hasError('required') || this.city.hasError('required') ||
      this.zip.hasError('required') || this.phone.hasError('required') ||
      this.shipInfo === '') {
      return false;
    } else {
      return true;
    }
  }

  getErrorMessage(): string {
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
