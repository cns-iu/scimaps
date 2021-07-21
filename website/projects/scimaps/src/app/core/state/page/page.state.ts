import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsImmutableDataRepository } from '@ngxs-labs/data/repositories';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetAppState } from '../../actions/app.actions';
import { AppState } from '../../models/app.model';


interface PageStateModel {
  placeholder: unknown; // Remove when other fields are added
  app: AppState
}

@StateRepository()
@State<PageStateModel>({
  name: 'page',
  defaults: {
    placeholder: 0,
    app: {
      test: 'test',
      showDrawer: false
    }
  }
})
@Injectable()
export class PageState extends NgxsImmutableDataRepository<PageStateModel> {
  @Selector()
  static getAppState(state: PageStateModel) {
    return state.app;
  }

  @Action(SetAppState)
  setAppState({getState, patchState}: StateContext<PageStateModel>, {payload}: SetAppState) {
    const state = getState();
    patchState({
      app: {...state.app, ...payload}
    })
  }
}
