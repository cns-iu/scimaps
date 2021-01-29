import { Shallow } from 'shallow-render';

import { TabHeaderComponent } from './tab-header.component';
import { TabHeaderModule } from './tab-header.module';

function getArrayOfStringsByLength(length: number): string[] {
  let array: string[] = [];

  for (let i = 0; i <= length; i++) {
    array.push(i.toString());
  }

  return array;
}

describe('TabHeaderComponent', () => {
  let shallow: Shallow<TabHeaderComponent>;

  beforeEach(() => {
    shallow = new Shallow(TabHeaderComponent, TabHeaderModule);
  });

  it('should create a .tab div for each tab item passed in', async () => {
    const tabs = getArrayOfStringsByLength(10);
    const { find } = await shallow.render({ bind: { tabs }});
    const tabElements = find('.tab');
    expect(tabElements.length).toEqual(tabs.length);
  });

  it('should emit the change event when the activeTabIndex is changed', async () => {
    const tabs = getArrayOfStringsByLength(2);
    const { instance, outputs } = await shallow.render({ bind: { tabs }});
    instance.activeTabIndex = 0;
    instance.setActiveTabIndex(1);
    expect(outputs.activeTabIndexChanged.emit).toHaveBeenCalled();
  });

  it('should not emit the change event when the activeTabIndex is called but not changed', async () => {
    const tabs = getArrayOfStringsByLength(2);
    const { instance, outputs } = await shallow.render({ bind: { tabs }});
    instance.activeTabIndex = 0;
    instance.setActiveTabIndex(0);
    expect(outputs.activeTabIndexChanged.emit).not.toHaveBeenCalled();
  });

  it('should change the activeTabIndex to the value passed in to setActiveTabIndex', async () => {
    const tabs = getArrayOfStringsByLength(2);
    const { instance } = await shallow.render({ bind: { tabs }});
    instance.activeTabIndex = 0;
    instance.setActiveTabIndex(1);
    expect(instance.activeTabIndex).toEqual(1);
  });
});
