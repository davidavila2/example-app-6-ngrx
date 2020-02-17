import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  COMPUTERS_FEATURE_KEY,
  computersAdapter,
  ComputersPartialState,
  ComputersState
} from './computers.reducer';

export const selectComputersState = createFeatureSelector<
  ComputersPartialState,
  ComputersState
  >(COMPUTERS_FEATURE_KEY);

const { selectAll, selectEntities } = computersAdapter.getSelectors();

export const selectComputersLoading = createSelector(
  selectComputersState,
  (state: ComputersState) => state.isLoading
);

export const selectAllComputers = createSelector(
  selectComputersState,
  (state: ComputersState) => selectAll(state)
);

export const selectComputersEntities = createSelector(
  selectComputersState,
  (state: ComputersState) => selectEntities(state)
);

export const selectComputerId = createSelector(
  selectComputersState,
  (state: ComputersState) => state.selectedComputerId
);

export const selectComputer = createSelector(
  selectComputersEntities,
  selectComputerId,
  (entites, selectedId) => selectedId && entites[selectedId]
);