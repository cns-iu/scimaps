import { Shallow } from 'shallow-render';

import { CallOutComponent } from './call-out.component';
import { CallOutModule } from './call-out.module';

const testItems: Array<[string, Date]> = [
  ['test', new Date()],
  ['test', new Date()],
  ['test', new Date()],
];

describe('CallOutComponent', () => {
  let shallow: Shallow<CallOutComponent>;

  beforeEach(async () => {
    shallow = new Shallow(CallOutComponent, CallOutModule);
  });

  it('should create an item for each date passed in', async () => {
    const { find } = await shallow.render({
      bind: { items: testItems, title: 'test' },
    });
    const items = find('.item');
    expect(items.length).toEqual(testItems.length);
  });

  it('should use the title passed in correctly', async () => {
    const { find } = await shallow.render({
      bind: { items: testItems, title: 'test-title' },
    });
    const title = find('.title')?.nativeElement as Element;
    expect(title?.innerHTML).toContain('test-title');
  });

  it('should return true if given date is past the current date', async () => {
    const { instance } = await shallow.render();
    const date = new Date('2020-05-12T23:50:21.817Z');
    const isPast = instance.isPastDate(date);
    expect(isPast).toEqual(true);
  });

  it('should return false if given date is in future of the current date', async () => {
    const { instance } = await shallow.render();
    const date = new Date('20205-05-12T23:50:21.817Z');
    const isPast = instance.isPastDate(date);
    expect(isPast).toEqual(false);
  });
});
