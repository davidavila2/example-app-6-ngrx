import { createAction, props } from '@ngrx/store';

import { Computer } from '@dashboard/core-data';

// Select Action
export const computerSelected = createAction(
  '[COMPUTER] Computer Selected',
  props<{ selectedComputerId: string | number }>()
);

// Load Actions
export const loadComputers = createAction('[COMPUTER] Load Computers');

export const loadComputer = createAction(
  '[COMPUTER] Load Computer',
  props<{ computerId: string }>()
);

export const computersLoaded = createAction(
  '[COMPUTER] Computers Loaded',
  props<{ computers: Computer[] }>()
);

export const computerLoaded = createAction( 
  '[COMPUTER] Computer Loaded',
  props<{ computer: Computer }>()
);

// Create Actions
export const createComputer = createAction(
  '[COMPUTER] Create Computer',
  props<{ computer: Computer }>()
);

export const computerCreated = createAction(
  '[COMPUTER] Computer Created',
  props<{ computer: Computer }>()
);

// Update Actions
export const updateComputer = createAction(
  '[COMPUTER] Update Computer',
  props<{ computer: Computer }>()
);

export const computerUpdated = createAction(
  '[COMPUTER] Computer Updated',
  props<{ computer: Computer }>()
);

// Delete Actions
export const deleteComputer = createAction(
  '[COMPUTER] Delete Computer',
  props<{ computer: Computer }>()
);

export const computerDeleted = createAction(
  '[COMPUTER] Computer Deleted',
  props<{ computer: Computer }>()
);