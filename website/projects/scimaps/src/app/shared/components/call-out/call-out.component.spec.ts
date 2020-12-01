import { Shallow } from 'shallow-render';

import { CallOutComponent } from './call-out.component';
import { CallOutModule } from './call-out.module';

const testItems: Array<[string, string]> = [
  ['test', '1'],
  ['test', '2'],
  ['test', '3']
];

describe('CallOutComponent', () => {
  let shallow: Shallow<CallOutComponent>;

  beforeEach(async () => {
    shallow = new Shallow(CallOutComponent, CallOutModule);
  });

  it('should create an item for each date passed in', async () => {
    const { find } = await shallow.render({ bind: { items: testItems, title: 'test' }});
    const items = find('.item');
    expect(items.length).toEqual(testItems.length);
  });

  it('should use the title passed in correctly', async () => {
    const { find } = await shallow.render({ bind: { items: testItems, title: 'test-title' }});
    const title = find('.title')?.nativeElement as Element;
    expect(title?.innerHTML).toContain('test-title');
  });
});
