import { Shallow } from 'shallow-render';

import { FooterComponent } from './footer.component';
import { FooterModule } from './footer.module';


describe('FooterComponent', () => {
  let shallow: Shallow<FooterComponent>;

  function itHasElement(selector: string): void {
    it(`has element "${selector}"`, async () => {
      const { find } = await shallow.render();
      expect(find(selector)).toHaveFoundOne();
    });
  }

  function itHasManyElements(selector: string, count: number): void {
    it(`has elements "${selector}"`, async () => {
      const { find } = await shallow.render();
      expect(find(selector)).toHaveFound(count);
    });
  }

  beforeEach(() => {
    shallow = new Shallow(FooterComponent, FooterModule);
  });

  describe('Contact Bar', () => {
    itHasElement('.contact');
    itHasManyElements('.social', 6);
    itHasElement('.phone .icon');
    itHasElement('.phone .text');

    it('has the provided phone number', async () => {
      const { find } = await shallow.render({ bind: { phoneNumber: '123456789' } });
      const el = find('.phone .text')?.nativeElement as Element;
      expect(el?.innerHTML).toContain('123456789');
    });
  });

  describe('Acknowledgement Bar', () => {
    itHasElement('.acknowledgement');

    it('contains the provided text', async () => {
      const { find } = await shallow.render({ bind: { acknowledgement: 'foobar' } });
      const el = find('.acknowledgement')?.nativeElement as Element;
      expect(el?.innerHTML).toContain('foobar');
    });
  });
});
