import { computersReducer, initialState } from './computers.reducer';
import * as computersAction from './computers.actions';

const mockComputers = <any>[{ id: 2 }];
const mockComputer = <any>{ id: 2 };

describe('ComputersReducer', () => {

  describe('Load Computers', () => {
    it('should return entities and ids when success action is passsed', () => {
      const mockResponce = { ...initialState, entities: { 2: { id: 2 } }, ids: [2] };
      expect(computersReducer(initialState, computersAction.computersLoaded({ computers: mockComputers }))).toEqual(mockResponce)
    });

    it('should set loading to true when action is passed', () => {
      const mockResponse = { ...initialState, isLoading: true };
      expect(computersReducer(initialState, computersAction.loadComputers())).toEqual(mockResponse)
    });
  });

  describe('select computer', () => {
    it('should select computer by passed id', () => {
      const mockRepsonse = { ...initialState, selectedComputerId: 1 };
      expect(computersReducer(initialState, computersAction.computerSelected({ selectedComputerId: 1 }))).toEqual(mockRepsonse)
    });
  });

  describe('computer created', () => {
    it('should return entities and ids when computerCreated is called', () => {
      const mockResponse = { ...initialState, entities: { 2: mockComputer }, ids: [2] };
      expect(computersReducer(initialState, computersAction.computerCreated({ computer: mockComputer }))).toEqual(mockResponse)
    });

    it('should set loading to true when action is passed', () => {
      const mockResponse = { ...initialState, isLoading: true };
      expect(computersReducer(initialState, computersAction.createComputer({ computer: mockComputer }))).toEqual(mockResponse)
    })
  });

  describe('update computer', () => {
    it('should return entities and ids when computerUpdated is passed', () => {
      const mockResponse = { ...initialState, entities: { 2: { ...mockComputer } }, ids: [2] };
      expect(computersReducer(initialState, computersAction.computerUpdated({ computer: mockComputer }))).toEqual(mockResponse)
    });
    
    it('should set loading to true when actuon is passed', () => {
      const mockRepsonse = { ...initialState, isLoading: true };
      expect(computersReducer(initialState, computersAction.updateComputer({computer: mockComputer}))).toEqual(mockRepsonse)
    })
  });

  describe('computerDeleted', () => {
    it('should return entities and ids when computerDeleted is passed', () => {
      const mockRepsonse = { ...initialState, entities: {}, ids: [] };
      expect(computersReducer(initialState, computersAction.computerDeleted({ computer: mockComputer }))).toEqual(mockRepsonse)
    });

    it('should set liading to treu when action is passed', () => {
      const mockResponse = { ...initialState, isLoading: true };
      expect(computersReducer(initialState, computersAction.deleteComputer({ computer: mockComputer }))).toEqual(mockResponse)
    });
  });


})