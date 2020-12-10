import { Shallow } from 'shallow-render';
import { MatDialogRef } from '@angular/material/dialog';
import { PurchaseModalComponent, PurchaseFormInfo } from './purchase-modal.component';
import { PurchaseModalModule } from './purchase-modal.module';

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
    const { instance } = await shallow.render();
    instance.buttonClickSend();
    expect(instance.confirmation).toBeTrue();
  });

  it('updates the form', async () => {
    const { instance } = await shallow.render();
    instance.currentInfo = testInfo;
    const testEvent = {
      value: 'New York City'
    } as unknown;
    instance.change(testEvent, 'city');
    expect(instance.currentInfo.city).toBe('New York City');
  });

  it('updates the newlines in shipping info', async () => {
    const { instance } = await shallow.render();
    const testEvent = {
      value: 'abcdefg\nhijklmnop'
    } as unknown;
    instance.updateShipInfo(testEvent);
    expect(instance.shipInfo).toBe('abcdefg%0D%0Ahijklmnop');
  });

  it('updates the selected state', async () => {
    const { instance } = await shallow.render();
    instance.currentInfo = testInfo;
    const testEvent = {
      value: 'California'
    } as unknown;
    instance.stateChange(testEvent);
    expect(instance.currentInfo.state).toBe('California');
  });

  it('creates the proper maillink', async () => {
    const { instance } = await shallow.render();
    instance.currentInfo = testInfo;
    instance.shipInfo = 'shippingInfo'
    instance.updateMailLink();
    expect(instance.mailLink).toBe('mailto:katy@indiana.edu?subject=Map%20Purchase&body=Name: firstName lastName%0D%0AAddress: shipAddress, city, state, zip%0D%0AEmail: email%0D%0APhone: phone%0D%0A%0D%0AshippingInfo');
  });
});
