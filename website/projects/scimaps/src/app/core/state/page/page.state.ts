import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetAppState } from '../../actions/app.actions';
import { AppState } from '../../models/app.model';


interface PageStateModel {
  placeholder: unknown; // Remove when other fields are added
  app: AppState;
}
@State<PageStateModel>({
  name: 'page',
  defaults: {
    placeholder: 0,
    app: {
      test: 'test',
      drawer: {
        showDrawer: false
      }
    }
  }
})
@Injectable()
export class PageState {
  @Selector()
  static getAppState(state: PageStateModel): AppState {
    return state.app;
  }

  @Selector()
  static drawer(state: PageStateModel): Params | undefined {
    return state.app.drawer;
  }

  @Action(SetAppState)
  setAppState({getState, patchState}: StateContext<PageStateModel>, {payload}: Partial<SetAppState>): void {
    const state = getState();
    patchState({
      app: {...state.app, ...payload}
    });
  }
}
