import { Shallow } from 'shallow-render';
import { MatDialogRef } from '@angular/material/dialog';
import { PurchaseModalComponent, PurchaseFormInfo } from './purchase-modal.component';
import { PurchaseModalModule } from './purchase-modal.module';
import { MatSelectChange } from '@angular/material/select';

describe('PurchaseModalComponent', () => {
  let shallow: Shallow<PurchaseModalComponent>;

  const testInfo = {
    firstName: 'firstName',
    lastName: 'lastName',
    shipAddress: 'shipAddress',
    city: 'city',
    state: 'state',
    zip: 'zip',
    email: 'email',
    phone: 'phone',
  } as PurchaseFormInfo;

  beforeEach(async () => {
    shallow = new Shallow(PurchaseModalComponent, PurchaseModalModule)
      .provide({ provide: MatDialogRef, useValue: {} });
  });

  it('closes the purchase modal', async () => {
    const { instance, get } = await shallow
      .mock(MatDialogRef, { close(): void { } })
      .render();
    const ref = get(MatDialogRef);
    instance.close();
    expect(ref.close).toHaveBeenCalled();
  });

  it('switches to the confirmation screen when send button is clicked', async () => {
    const { instance, find } = await shallow.render();
    instance.shipInfo = 'test';
    const firstName = find('.first-name-input');
    firstName.nativeElement.value = 'test';
    firstName.triggerEventHandler('input', { target: firstName.nativeElement });
    const lastName = find('.last-name-input');
    lastName.nativeElement.value = 'test';
    lastName.triggerEventHandler('input', { target: lastName.nativeElement });
    const address = find('.shipping-address-input');
    address.nativeElement.value = 'test';
    address.triggerEventHandler('input', { target: address.nativeElement });
    const city = find('.city-input');
    city.nativeElement.value = 'test';
    city.triggerEventHandler('input', { target: city.nativeElement });
    const state = find('.state-input');
    city.nativeElement.value = 'Alaska';
    city.triggerEventHandler('select', { target: state.nativeElement });
    const zip = find('.zip-input');
    zip.nativeElement.value = 'test';
    zip.triggerEventHandler('input', { target: zip.nativeElement });
    const email = find('.email-input');
    email.nativeElement.value = 'test@gmail.com';
    email.triggerEventHandler('input', { target: email.nativeElement });
    const phone = find('.phone-input');
    phone.nativeElement.value = 'test';
    phone.triggerEventHandler('input', { target: phone.nativeElement });
    instance.buttonClickSend();
    expect(instance.confirmation).toBeTrue();
  });

  it('updates the form', async () => {
    const { instance } = await shallow.render();
    instance.currentInfo = testInfo;
    const testEvent = {
      value: 'New York City'
    } as HTMLInputElement;
    instance.change(testEvent, 'city');
    expect(instance.currentInfo.city).toBe('New York City');
  });

  it('updates the newlines in shipping info', async () => {
    const { instance } = await shallow.render();
    const testEvent = {
      value: 'abcdefg\nhijklmnop'
    } as HTMLTextAreaElement;
    instance.updateShipInfo(testEvent);
    expect(instance.shipInfo).toBe('abcdefg%0D%0Ahijklmnop');
  });

  it('updates the selected state', async () => {
    const { instance } = await shallow.render();
    instance.currentInfo = testInfo;
    const testEvent = {
      value: 'California'
    } as MatSelectChange;
    instance.stateChange(testEvent);
    expect(instance.currentInfo.state).toBe('California');
  });

  it('creates the proper maillink', async () => {
    const { instance } = await shallow.render();
    instance.currentInfo = testInfo;
    instance.shipInfo = 'shippingInfo';
    instance.updateMailLink();
    expect(instance.mailLink).toBe('mailto:katy@indiana.edu?subject=Map%20Purchase&body=Name: firstName lastName%0D%0AAddress: shipAddress, city, state, zip%0D%0AEmail: email%0D%0APhone: phone%0D%0A%0D%0AshippingInfo');
  });
});
