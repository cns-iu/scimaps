import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownModule } from 'ngx-markdown';
import { Shallow } from 'shallow-render';
import { ActionCardItem } from '../../../core/models/action-card-item';

import { ActionCardComponent } from './action-card.component';
import { ActionCardModule } from './action-card.module';

const testActionItem: ActionCardItem = {
  title: 'Course Title',
  subtitle: 'April 28, 2020',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus vitae diam vel volutpat. Pellentesque venenatis velit lectus, tempor dictum tortor pretium nec.',
  buttonLabel: 'INFO/REGISTRATION',
  buttonLink: 'www.google.com',
  imageSource: 'assets/action-card/image1.png'
};


fdescribe('ActionCardComponent', () => {
  let component: ActionCardComponent;
  let fixture: ComponentFixture<ActionCardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ActionCardModule, MarkdownModule.forRoot()]
    })
    .compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCardComponent);
    component = fixture.componentInstance;
    component.actionItem = testActionItem;
    fixture.detectChanges();
  })

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });
});

xdescribe('ActionCardComponent', () => {
  let shallow: Shallow<ActionCardComponent>;

  beforeEach(async () => {
    shallow = new Shallow(ActionCardComponent, ActionCardModule);
  });

  function itHasElementWithContent(selector: string, content: string, compact = true, profiles = 1): void {
    it(`has the correct content for ${selector}`, async () => {
      const { find } = await shallow.render({ bind: { actionItem: testActionItem }});
      const el = find(selector)[0].nativeElement as Element;
      expect(el.innerHTML).toContain(content);
    });
  }

  itHasElementWithContent('.title', testActionItem.title);
  itHasElementWithContent('.subtitle', testActionItem.subtitle);
  itHasElementWithContent('.body', testActionItem.body);
  itHasElementWithContent('.action-button', testActionItem.buttonLabel);

  it('should create the correct image URL', async () => {
    const { instance } = await shallow.render({ bind: { actionItem: testActionItem }});
    const url = instance.imageUrl;
    expect(url).toEqual(`url('${testActionItem.imageSource}')`);
  });

  it('should window.open when goToLink is called', async () => {
    const { instance } = await shallow.render({ bind: { actionItem: testActionItem }});
    const spy = spyOn(window, 'open');
    instance.goToLink('test.com');
    expect(spy).toHaveBeenCalledWith('test.com', '_blank');
  });

  it('should hide the component when the close button is clicked', async () => {
    const { instance, find } = await shallow.render({ bind: { actionItem: testActionItem }});
    instance.closed = false;
    const closeButton = find('.close-icon');
    closeButton.triggerEventHandler('click', {});
    expect(instance.closed).toBeTrue();
  });
});
