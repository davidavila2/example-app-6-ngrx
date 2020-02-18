import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import * as computersActions from './computers.actions';
import { Computer, ComputerService, NotifyService } from '@dashboard/core-data';
import { ComputersPartialState } from './computers.reducer';

@Injectable()
export class ComputersEffect {
  loadComputers$ = createEffect(() =>
    this.dataPersistence.fetch(computersActions.loadComputers, {
      run: (
        action: ReturnType<typeof computersActions.loadComputers>,
        state: ComputersPartialState
      ) => {
        return this.computersService.all().pipe(
          map((computers: Computer[]) => computersActions.computersLoaded({ computers }))
        );
      },
      onError: (action: ReturnType<typeof computersActions.loadComputers>, error) => {
        this.notify.notification('Effect Error:', error);
      }
    })
  );

  // loadComputer$ = createEffect(() =>
  //   this.dataPersistence.fetch(computersActions.loadComputer, {
  //     run: (
  //       action: ReturnType<typeof computersActions.loadComputer>,
  //       state: ComputersPartialState
  //     ) => {
  //       return this.computersService.findOne(action.computerId).pipe(
  //         map((computer: Computer) => computersActions.computerLoaded({ computer }))
  //       );
  //     },
  //     onError: (action: ReturnType<typeof computersActions.loadComputer>, error) => {
  //       this.notify.notification('Effect Error:', error);
  //     }
  //   })
  // );

  // selectComputerOnLoad$ = createEffect(() =>
  //   this.dataPersistence.actions.pipe(
  //     ofType(computersActions.computerLoaded),
  //     map(({ computer }) => computersActions.computerSelected({ selectedComputerId: computer.id }))
  //   ))

  createComputer$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(computersActions.createComputer, {
      run: (
        action: ReturnType<typeof computersActions.createComputer>,
        state: ComputersPartialState
      ) => {
        return this.computersService.create(action.computer).pipe(
          tap((computer: Computer) => console.log(computer)),
          map((computer: Computer) => computersActions.computerCreated({ computer })),
        );
      },
      onError: (action: ReturnType<typeof computersActions.createComputer>, error) => {
        this.notify.notification('Effect Error:', error);
      }
    }))

  updateComputer$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(computersActions.updateComputer, {
      run: (
        action: ReturnType<typeof computersActions.updateComputer>,
        state: ComputersPartialState
      ) => {
        return this.computersService.update(action.computer).pipe(
          map((computer: Computer) => computersActions.computerUpdated({ computer })),
          tap(() => this.computersService.all())

        );
      },
      onError: (action: ReturnType<typeof computersActions.updateComputer>, error) => {
        this.notify.notification('Effect Error:', error);
      }
    })
  );

  deleteComputer$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(computersActions.deleteComputer, {
      run: (
        action: ReturnType<typeof computersActions.deleteComputer>,
        state: ComputersPartialState
      ) => {
        return this.computersService.delete(action.computer).pipe(
          tap(() => console.log(action.computer.id)),
          map(() => computersActions.computerDeleted({ computer: action.computer }))
        );
      },
      onError: (action: ReturnType<typeof computersActions.deleteComputer>, error) => {
        this.notify.notification('Effect delete Error: ', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ComputersPartialState>,
    private computersService: ComputerService,
    private notify: NotifyService
  ) { }
}