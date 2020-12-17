import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Shallow } from 'shallow-render';

import { WarningDialogComponent } from './warning-dialog.component';
import { WarningDialogModule } from './warning-dialog.module';

describe('WarningDialogComponent', () => {
  let shallow: Shallow<WarningDialogComponent>;

  beforeEach(async () => {
    shallow = new Shallow(WarningDialogComponent, WarningDialogModule)
      .provide({ provide: MatDialogRef, useValue: {} })
      .provide({
        provide: MAT_DIALOG_DATA, useValue: {
          closeLink: 'testlink.com',
          warningMessage: 'test message'
        }
      });
  });

  it('should call the close() method when the close button is pressed', async () => {
    const { find, instance } = await shallow.render();
    const spy = spyOn(instance, 'close');
    const closeButton = find('.close-icon');

    closeButton.triggerEventHandler('click', {});
    expect(spy).toHaveBeenCalled();
});

  it('should close the dialog when the close() method is called', async () => {
      const { instance, get } = await shallow
          .mock(MatDialogRef, { close(): void { } })
          .render();
      const ref = get(MatDialogRef);

      instance.close();

      expect(ref.close).toHaveBeenCalled();
  });

  it('should close the dialog when buttonClickHandler is called if there is no closeLink', async () => {
    const { instance, get } = await shallow
          .mock(MatDialogRef, { close(): void { } })
          .render();
    const ref = get(MatDialogRef);
    instance.closeLink = '';
    instance.buttonClickHandler();
    expect(ref.close).toHaveBeenCalled();
  });

  it('should go to the closeLink when buttonClickHandler is called, if there is a closeLink', async () => {
    const { instance } = await shallow.render();
    const spy = spyOn(window, 'open');
    instance.closeLink = 'www.google.com';
    instance.buttonClickHandler();
    expect(spy).toHaveBeenCalled();
  });
});
