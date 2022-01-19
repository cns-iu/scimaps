import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
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


describe('ActionCardComponent', () => {
  let component: ActionCardComponent;
  let fixture: ComponentFixture<ActionCardComponent>;
  let el: DebugElement
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
    el = fixture.debugElement;
    fixture.detectChanges();
  })

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should have correct title', () => {
    const title = el.query(By.css('.title'));
    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent).toEqual(testActionItem.title);
  });

  it('Should have correct subtitle', () => {
    const subtitle = el.query(By.css('.subtitle'));
    expect(subtitle).toBeTruthy();
    expect(subtitle.nativeElement.textContent).toEqual(testActionItem.subtitle);
  });

  it('Should have correct body', () => {
    const body = el.query(By.css('.body'));
    expect(body).toBeTruthy();
    expect(body.nativeElement.textContent.trim()).toEqual(testActionItem.body);
  });

  it('Should have correct button label', () => {
    const button = el.query(By.css('.action-button'));
    expect(button).toBeTruthy();
    expect(button.nativeElement.textContent).toEqual(testActionItem.buttonLabel);
  });

  it('Should have correct imageURL', () => {
    const url = component.imageUrl;
    expect(url).toEqual(`url('${testActionItem.imageSource}')`);
  });

  it('Should goto link', () => {
    const spy = spyOn(window, 'open');
    component.goToLink('test.com');
    expect(spy).toHaveBeenCalledWith('test.com', '_blank');
  });

  it('Should close', fakeAsync(() => {
    const close = el.query(By.css('.close-icon'));
    close.triggerEventHandler('click', {});
    fixture.detectChanges()
    tick(500);
    expect(component.closed).toBeTruthy();
  }));
});
