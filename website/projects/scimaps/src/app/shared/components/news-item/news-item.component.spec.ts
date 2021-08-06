import { DatePipe } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { By } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { NewsItemComponent } from './news-item.component';
import { NewsItem } from './news-item.model';
import { NewsItemModule } from './news-item.module';


const testItem: NewsItem = {
  title: 'test title',
  date: "2002-01-01",
  publication: 'test publication',
  institution: 'test institution',
  thumbnail: 'test thumbnail',
  pdfLink: 'test link'
};


describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;
  let el: DebugElement;
  let pipe = new DatePipe('en-EN');
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsItemComponent ],
      imports: [NewsItemModule, MatIconTestingModule, MarkdownModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });
  
  it('Should have correct data', () => {
    component.item = testItem;
    fixture.detectChanges();
    const dateEl = el.query(By.css('.date'));
    expect(dateEl.nativeElement.textContent).toContain(pipe.transform(testItem.date, 'mediumDate', '+0000'));
  });
  it('Should have correct identifier', () => {
    component.item = testItem;
    fixture.detectChanges();
    const identifierEl = el.query(By.css('.identifier'));
    expect(identifierEl.nativeElement.textContent).toContain('test publication at test institution');
  });
});
