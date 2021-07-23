import { Params } from '@angular/router';

export interface AppState {
    test: string;
    drawer?: {
        showDrawer: boolean,
        drawerName?: string,
        drawerPayload?: Params
    };
}
