import { ActionReducerMap } from '@ngrx/store';

import * as fromComputers from './computers-ngrx/computers.reducer';

export interface AppState {
  computers: fromComputers.ComputersState
}

export const reducers: ActionReducerMap<AppState> = {
  computers: fromComputers.reducer
}

export const defaultState: AppState = {
  computers: { ids: [] } as fromComputers.ComputersState
}