import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { ComputersFacade } from './computers.facade';
import { TestBed, async } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import * as ComputerActions from './computers.actions';
import * as computersSelectors from './computers.selectors';

const mockComputers = <any>[{ id: 2 }];
const mockComputer = <any>{ id: 2 };

describe('ComputersFacade', () => {
  let actions$: Observable<any>;
  let facade: ComputersFacade;
  let store: MockStore<any>

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ComputersFacade,
        MockStore,
        provideMockStore(),
        provideMockActions(() => actions$)
      ]
    });
  });

  beforeEach(() => {
    facade = TestBed.get(ComputersFacade);
    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch')
  });

  describe('#selectComputer', () => {
    it('should dispatch a selectedComputer Action', () => {
      facade.selectComputer(mockComputers);
      expect(store.dispatch).toHaveBeenCalledWith(ComputerActions.computerSelected({ selectedComputerId: mockComputers }))
    })
  })

  describe('#loadComputers', () => {
    it('should disatch load computers action', () => {
      facade.loadComputers();
      expect(store.dispatch).toHaveBeenCalledWith(ComputerActions.loadComputers())
    });
  });

  describe('#createComputer', () => {
    it('should dispatch create computer action', () => {
      facade.createComputer(mockComputer);
      expect(store.dispatch).toHaveBeenCalledWith(ComputerActions.createComputer({ computer: mockComputer }))
    });
  });

  describe('#updateComputer', () => {
    it('should dispatch update computer action', () => {
      facade.updateComputer(mockComputer);
      expect(store.dispatch).toHaveBeenCalledWith(ComputerActions.updateComputer({ computer: mockComputer }));
    });
  });

  describe('#deleteComputer', () => {
    it('should dispatch delete computer action', () => {
      facade.deleteComputer(mockComputer);
      expect(store.dispatch).toHaveBeenCalledWith(ComputerActions.deleteComputer({ computer: mockComputer }));
    });
  });

  describe('allComputers$', () => {
    it('should return an observable of computers', (done) => {
      store.overrideSelector(computersSelectors.selectAllComputers, mockComputers);

      facade.allComputers$.subscribe(observableStream => {
        expect(observableStream).toEqual(mockComputers);
        done();
      });
    });
  });

  describe('selectedComputer$', () => {
    it('should return an observable with a selected computer', (done) => {
      store.overrideSelector(computersSelectors.selectComputer, mockComputers);

      facade.selectedComputer$.subscribe(observableStream => {
        expect(observableStream).toEqual(mockComputers);
        done();
      });
    });
  });

  describe('computerLoading$', () => {
    it('should return an observable with a loading status', (done) => {
      store.overrideSelector(computersSelectors.selectComputersLoading, false);

      facade.computerLoading$.subscribe(observableStream => {
        expect(observableStream).toEqual(false);
        done();
      });
    });
  });

  // describe('mutations$', () => {
  //   it('should return an observable with a mutation status', (done) => {
  //     store.overrideSelector(computersSelectors.selectComputer, mockComputers);

  //     facade.mutations$.subscribe(observableStream => {
  //       expect(observableStream).toEqual(ComputerActions.createComputer);
  //       done();
  //     });
  //   });
  // });

});