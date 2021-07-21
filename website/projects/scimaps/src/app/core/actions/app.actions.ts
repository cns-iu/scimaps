import { AppState } from "../models/app.model";

export class SetAppState {
    static readonly type = '[AppState] set'
    constructor(public payload: Partial<AppState>) {
    }
}