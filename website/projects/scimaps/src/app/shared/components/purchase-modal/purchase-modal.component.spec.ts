import { Shallow } from 'shallow-render';
import { MatDialogRef } from '@angular/material/dialog';
import { PurchaseModalComponent } from './purchase-modal.component';
import { PurchaseModalModule } from './purchase-modal.module';

describe('PurchaseModalComponent', () => {
  let shallow: Shallow<PurchaseModalComponent>;

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
});
