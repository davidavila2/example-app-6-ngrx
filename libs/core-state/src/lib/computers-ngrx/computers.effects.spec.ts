import { ComputerService, NotifyService, Computer } from '@dashboard/core-data';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of, throwError } from 'rxjs';
import { DataPersistence } from '@nrwl/angular';
import { Actions } from '@ngrx/effects';
import { TestBed, async } from '@angular/core/testing';

import { ComputersEffect } from './computers.effects';
import * as computerActions from './computers.actions';

const mockComputers = <any>[{ id: 2 }];
const mockError = 'error';

describe('Computer Effects', () => {
  let actions$: Observable<any>;
  let effects: ComputersEffect;
  let dataPersistence: DataPersistence<any>;
  let computerService: ComputerService;
  let notify: NotifyService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        ComputersEffect,
        DataPersistence, {
          provide: ComputerService,
          useValue: {
            all: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
          }
        },
        {
          provide: NotifyService,
          useValue: {
            notification: jest.fn()
          }
        },
        provideMockActions(() => actions$),
        provideMockStore()
      ]
    });
  });

  beforeEach(() => {
    effects = TestBed.get(ComputersEffect);
    computerService = TestBed.get(ComputerService);
    notify = TestBed.get(NotifyService);
    dataPersistence = TestBed.get(DataPersistence);
  });

  describe('#loadComputers', () => {
    it('should load computers', (done) => {
      actions$ = of(computerActions.loadComputers());
      jest.spyOn(computerService, 'all').mockReturnValueOnce(of(mockComputers))

      effects.loadComputers$.subscribe(dispatchedAction => {
        expect(computerService.all).toHaveBeenCalled();
        expect(dispatchedAction).toEqual(computerActions.computersLoaded({ computers: mockComputers }));
        done();
      });

      // it('should dispatch the loadComputersError action', (done) => {
      //   actions$ = of(computerActions.loadComputers());
      //   jest.spyOn(computerService, 'all').mockReturnValueOnce(throwError(mockError));

      //   effects.loadComputers$.subscribe(dispatchedAction => {
      //     expect(dispatchedAction).toEqual(computerActions.load)
      //   })
      // })
    });
  });

  describe('#createComputer', () => {
    it('should create a computer', (done) => {
      actions$ = of(computerActions.createComputer({ computer: mockComputers }));
      jest.spyOn(computerService, 'create').mockReturnValueOnce(of(mockComputers));

      effects.createComputer$.subscribe(dispatchedAction => {
        expect(computerService.create).toHaveBeenCalled();
        expect(dispatchedAction).toEqual(computerActions.computerCreated({ computer: mockComputers }));
        done();
      });
    });
  })

  describe('#updateComputer', () => {
    it('should update a computer', (done) => {
      actions$ = of(computerActions.updateComputer({ computer: mockComputers }));
      jest.spyOn(computerService, 'update').mockReturnValueOnce(of(mockComputers));

      effects.updateComputer$.subscribe(dispatchedAction => {
        expect(computerService.update).toHaveBeenCalled();
        expect(dispatchedAction).toEqual(computerActions.computerUpdated({ computer: mockComputers }));
        done();
      });
    });
  });


  describe('#deleteComputer', () => {
    it('should delete a computer', (done) => {
      actions$ = of(computerActions.deleteComputer({ computer: mockComputers }));
      jest.spyOn(computerService, 'delete').mockReturnValueOnce(of(mockComputers));

      effects.deleteComputer$.subscribe(dispatchedAction => {
        expect(computerService.delete).toHaveBeenCalled();
        expect(dispatchedAction).toEqual(computerActions.computerDeleted({ computer: mockComputers }));
        done();
      });
    });
  });


}); // this is the closing describe