// import { Shallow } from 'shallow-render';
// import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
// import { DebugElement } from '@angular/core';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { By } from '@angular/platform-browser';
// import { MatIconTestingModule } from '@angular/material/icon/testing';
// import { NewsItem } from '../news-item/news-item.model';

// const testItems: NewsItem[] = [
//   {
//     title: 'Title 6',
//     date: new Date(2000, 1, 1),
//     publication: 'A',
//     institution: 'test institution',
//     thumbnail: 'test thumb',
//     pdfLink: 'link'
//   },
//   {
//     title: 'Title 4',
//     date: new Date(2001, 1, 1),
//     publication: 'B',
//     institution: 'test institution',
//     thumbnail: 'test thumb',
//     pdfLink: 'link'
//   },
//   {
//     title: 'Title 5',
//     date: new Date(2002, 1, 1),
//     publication: 'E',
//     institution: 'test institution',
//     thumbnail: 'test thumb',
//     pdfLink: 'link'
//   },
//   {
//     title: 'Title 2',
//     date: new Date(2003, 1, 1),
//     publication: 'F',
//     institution: 'test institution',
//     thumbnail: 'test thumb',
//     pdfLink: 'link'
//   },
//   {
//     title: 'Title 1',
//     date: new Date(2004, 1, 1),
//     publication: 'D',
//     institution: 'test institution',
//     thumbnail: 'test thumb',
//     pdfLink: 'link'
//   },
//   {
//     title: 'Title 3',
//     date: new Date(2005, 1, 1),
//     publication: 'C',
//     institution: 'test institution',
//     thumbnail: 'test thumb',
//     pdfLink: 'link'
//   },
//   {
//     title: 'Title 7',
//     date: new Date(2006, 1, 1),
//     publication: 'G',
//     institution: 'test institution',
//     thumbnail: 'test thumb',
//     pdfLink: 'link'
//   }
// ];

// xdescribe('NewsItemListComponent', () => {
//   let shallow: Shallow<NewsItemListComponent>;

//   beforeEach(async () => {
//     shallow = new Shallow(NewsItemListComponent, NewsItemListModule);
//   });

//   it('sorts displayed news items by title', async () => {
//     const { instance } = await shallow.render({ bind: { newsItems: testItems } });
//     instance.sort('title', 'asc');
//     expect(instance.displayedNewsItems[2].title).toBe('Title 3');
//   });

//   it('should toggle sort with title', async () => {
//     const { instance } = await shallow.render({ bind: { newsItems: testItems } });
//     instance.sort('title', 'asc');
//     instance.toggleSort('title');
//     expect(instance.displayedNewsItems[0].title).toBe('Title 7');
//   });

//   it('sorts displayed news items by publication', async () => {
//     const { instance } = await shallow.render({ bind: { newsItems: testItems } });
//     instance.sort('publication', 'asc');
//     expect(instance.displayedNewsItems[2].publication).toBe('C');
//   });

//   it('it should toggle sort with publication', async () => {
//     const { instance } = await shallow.render({ bind: { newsItems: testItems } });
//     instance.sort('publication', 'asc');
//     instance.toggleSort('publication');
//     expect(instance.displayedNewsItems[0].publication).toBe('G');
//   });

//   it('sorts displayed news items by date', async () => {
//     const { instance } = await shallow.render({ bind: { newsItems: testItems } });
//     instance.sort('date', 'asc');
//     expect(instance.displayedNewsItems[2].date).toEqual(new Date(2002, 1, 1));
//   });

//   it('it should toggle sort with date', async () => {
//     const { instance } = await shallow.render({ bind: { newsItems: testItems } });
//     instance.sort('date', 'asc');
//     instance.toggleSort('date');
//     expect(instance.displayedNewsItems[0].date).toEqual(new Date(2006, 1, 1));
//   });

//   it('filters the news items by a selected year', async () => {
//     const { instance } = await shallow.render({ bind: { newsItems: testItems } });
//     instance.filterData({ year: '2005', searchKey: '' });
//     expect(instance.displayedNewsItems[0].title).toBe('Title 3');
//   });

//   it('filters the news items by search Key', async () => {
//     const { instance } = await shallow.render({ bind: { newsItems: testItems } });
//     instance.filterData({ year: '', searchKey: '3' });
//     expect(instance.displayedNewsItems[0].title).toBe('Title 3');
//   });

//   it('removes the year filter if All selected', async () => {
//     const { instance } = await shallow.render({ bind: { newsItems: testItems } });
//     instance.filterData({ year: '', searchKey: '' });
//     expect(instance.displayedNewsItems).toEqual(instance.newsItems);
//   });

//   it('initial show all items should be false', async () => {
//     const { instance } = await shallow.render({ bind: { newsItems: testItems } });
//     instance.filterData({ year: '', searchKey: '' });
//     expect(instance.showAllItems).toEqual(false);
//   });

//   it('should display show more button when entries > displayLimit', async () => {
//     const { instance, find } = await shallow.render({ bind: { newsItems: testItems } });
//     instance.filterData({ year: '', searchKey: '' });
//     const el = find('.show-more').nativeElement as Element;
//     expect(el.innerHTML).toContain('Show More');
//   });
// });



// describe('NewsItemListComponenet with TestBed', () => {
//   let component: NewsItemListComponent;
//   let fixture: ComponentFixture<NewsItemListComponent>;
//   let el: DebugElement;

//   beforeEach(async () => {

//     TestBed.configureTestingModule({
//       imports: [
//         NewsItemListModule,
//         NoopAnimationsModule,
//         MatIconTestingModule
//       ]
//     }).compileComponents().then(() => {
//       fixture = TestBed.createComponent(NewsItemListComponent);
//       component = fixture.componentInstance;
//       el = fixture.debugElement;
//     });

//   });

//   it('should create component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should set isSearchOpen to true, when search icon is clicked', fakeAsync(() => {
//     const icon = el.query(By.css('.search-icon-container'));
//     if (icon) {
//       icon.triggerEventHandler('click', {});
//       fixture.detectChanges();
//       tick(500);
//       expect(component.isSearchOpen).toBeTruthy();
//     } else {
//       fail('couldnt find icon');
//     }
//   }));

//   it('should set isSearchOpen false, when icon is clicked again', fakeAsync(() => {
//     component.isSearchOpen = true;
//     fixture.detectChanges();
//     const icon = el.query(By.css('.search-off-icon-container'));
//     if (icon) {
//       icon.triggerEventHandler('click', {});
//       fixture.detectChanges();
//       tick(500);
//       expect(component.isSearchOpen).toBeFalse();
//     } else {
//       fail('couldnt find icon');
//     }
//   }));

//   it('should set correct search value', fakeAsync(() => {
//     component.isSearchOpen = true;
//     component.newsItems = testItems;
//     fixture.detectChanges();
//     component.searchForm.controls.search.setValue('3');
//     fixture.detectChanges();
//     tick(500);
//     flushMicrotasks();
//     expect(component.searchChangeSubscription).toBeTruthy();
//     expect(component.searchInput?.nativeElement.value).toEqual('3');
//   })
//   );

//   it('should set correct year value', fakeAsync(() => {
//     component.isSearchOpen = true;
//     component.newsItems = testItems;
//     fixture.detectChanges();
//     component.searchForm.controls.year.setValue('2005');
//     fixture.detectChanges();
//     tick(500);
//     flushMicrotasks();
//     expect(component.yearChangeSubscription).toBeTruthy();
//     expect(component.searchForm.controls.year.value).toEqual('2005');
//   }));
// });
