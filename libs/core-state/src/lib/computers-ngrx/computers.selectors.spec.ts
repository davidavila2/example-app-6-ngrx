import * as computersSelectors from './computers.selectors';
import { initialState } from './computers.reducer';
import { select } from '@ngrx/store';

const mockComputers = <any>[{ id: 2 }];
const mockEntities = <any>{ 1: {} };

describe('computerSelectors', () => {
  let state;

  beforeEach(() => {
    state = {
      computers: {
        ids: [],
        entities: {},
        ...initialState
      }
    }
  })

  it('selectComputers Loading', () => {
    state.computers.isLoading = true;
    expect(computersSelectors.selectComputersLoading(state)).toBeTruthy();
  });

  it('should select entities', () => {
    state.computers.entities = { 1: {} };
    expect(computersSelectors.selectComputersEntities(state)).toEqual(mockEntities)
  });

  it('should select all computers', () => {
    state.computers.ids = [1];
    state.computers.entities = { 1: { id: 1 } };
    const expectedResponse = [{ id: 1 }];
    expect(computersSelectors.selectAllComputers(state)).toEqual(expectedResponse)
  });

  it('should select computer by id', () => {
    state.computers.selectedComputerId = 1;
    expect(computersSelectors.selectComputerId(state)).toEqual(1);
  });

  it('should select a computer ', () => {
    state.computers.entities = { 1: { id: 1 } };
    state.computers.selectedComputerId = 1;
    expect(computersSelectors.selectComputer(state)).toEqual({ id: 1 })
  })
})