import { Injectable } from '@angular/core';
import { StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsImmutableDataRepository } from '@ngxs-labs/data/repositories';
import { State } from '@ngxs/store';


interface PageStateModel {
  placeholder: unknown; // Remove when other fields are added
}

@StateRepository()
@State<PageStateModel>({
  name: 'page',
  defaults: {
    placeholder: 0
  }
})
@Injectable()
export class PageState extends NgxsImmutableDataRepository<PageStateModel> {
}
