import { Injectable } from '@angular/core';

import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs/operators'; 

import * as fromComputers from './computers.reducer';
import * as computersActions from './computers.actions';
import * as computersSelectors from './computers.selectors';
import { Computer } from '@dashboard/core-data';

@Injectable({
  providedIn: 'root'
})
export class ComputersFacade {
  allComputers$ = this.store.pipe(select(computersSelectors.selectAllComputers));
  selectedComputer$ = this.store.pipe(select(computersSelectors.selectComputer));
  computerLoading$ = this.store.pipe(select(computersSelectors.selectComputersLoading));
  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === computersActions.createComputer({} as any).type ||
      action.type === computersActions.updateComputer({} as any).type ||
      action.type === computersActions.deleteComputer({} as any).type
    )
  );

  constructor(
    private actions$: ActionsSubject,
    private store: Store<fromComputers.ComputersPartialState>
  ) { }
  
  selectComputer(selectedComputerId: string | number) {
    this.dispatch(computersActions.computerSelected({ selectedComputerId }));
  }

  loadComputers() {
    this.dispatch(computersActions.loadComputers());
  }

  // loadComputer(computerId: string) {
  //   this.dispatch(computersActions.loadComputer({ computerId }));
  // }

  createComputer(computer: Computer) {
    this.dispatch(computersActions.createComputer({computer}))
  }

  updateComputer(computer: Computer) {
    this.dispatch(computersActions.updateComputer({computer}))
  }

  deleteComputer(computer: Computer) {
    this.dispatch(computersActions.deleteComputer({computer}))
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }

}