// import { Shallow } from 'shallow-render';
// import { ActivatedRoute, Router } from '@angular/router';

// import { MapComponent } from './map.component';
// import { MapModule } from './map.module';
// import { MapMacroscopeItem } from '../../core/models/discover-item';

// import { of } from 'rxjs';

// const testItem: MapMacroscopeItem = {
//   title: 'Title Test',
//   makers: [
//     {
//       name: 'Maker 1',
//       job: 'Job',
//       bio: 'test bio',
//       thumbnail: 'thumbnail'
//     },
//     {
//       name: 'Maker 2',
//       job: 'Job',
//       bio: 'test bio',
//       thumbnail: 'thumbnail'
//     }
//   ],
//   location: 'Test location',
//   credit: 'Test credits',
//   year: '9999',
//   description: 'test description',
//   references: ['Reference 1', 'Reference 2', 'Reference 3'],
//   thumbnail: 'test thumbnail',
//   translations: [
//     {
//       abbreviation: 'en',
//       abbr_short: 'en',
//       language: 'en',
//       native: 'en'
//     },
//     {
//       abbreviation: 'zh',
//       abbr_short: 'zh',
//       language: 'zh',
//       native: 'zh'
//     }
//   ],
//   externalLink: 'testlink'
// };

// describe('MapComponent', () => {
//   let shallow: Shallow<MapComponent>;

//   const mockRouter = {
//     navigate: jasmine.createSpy('navigate')
//   };


//   beforeEach(async () => {
//     shallow = new Shallow(MapComponent, MapModule)
//       .mock(ActivatedRoute, {
//         data: of({
//           queryParamMap: {
//             lang: 'en'
//           },
//           snapshot: {
//             paramMap: {
//               params: {iteration: '1', sequence: '1'}
//             }
//           }
//         })
//       })
//       .mock(Router, mockRouter)
//   });

//   it('should change the language', async () => {
//     const { instance } = await shallow.render();
//     instance.selectedItem = testItem;
//     instance.changeLanguage('zh');
//     expect(mockRouter.navigate).toHaveBeenCalledWith([ '/', 'map', '1', '1' ], { queryParams: {lang: 'zh'}});
//   });
// });
