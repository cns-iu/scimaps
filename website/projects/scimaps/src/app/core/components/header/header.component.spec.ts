import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Shallow } from 'shallow-render';

import { MediaQueryService } from '../../../shared/services/media-query.service';
import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';


describe('HeaderComponent', () => {
  let mediaStream: Subject<boolean>;
  let shallow: Shallow<HeaderComponent>;

  beforeEach(() => {
    mediaStream = new Subject();
    shallow = new Shallow(HeaderComponent, HeaderModule)
      .mock(MediaQueryService, {
        createStream: () => mediaStream.pipe(startWith(true))
      });
  });
});
