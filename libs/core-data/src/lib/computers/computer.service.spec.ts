import { TestBed, getTestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ComputerService } from './computer.service';
import { Computer } from './computer';

const mockServiceEndpoint = 'https://server-30-x-30.herokuapp.com/computers';
const mockServiceEndpointId = 'https://server-30-x-30.herokuapp.com/computers/1';
const testObject: Computer = {
  "approved": false,
  "coolLevel": 0,
  "details": "This is a test of details",
  "id": 21,
  "title": "This is a test"
};
const testObjectUpdated: Computer = {
  "approved": true,
  "coolLevel": 50,
  "details": "This is a test of details updated",
  "id": 21,
  "title": "This is a updated test"
};
const testArray: Computer[] = [
  {
    "approved": false,
    "coolLevel": 0,
    "details": "This is a test of details",
    "id": 21,
    "title": "This is a test"
  },
  {
    "approved": true,
    "coolLevel": 50,
    "details": "This is a test of details updated",
    "id": 21,
    "title": "This is a updated test"
  }
];

describe('ComputerService', () => {
  let injector: TestBed;
  let service: ComputerService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ComputerService
      ]
    });
  }));

  beforeEach(() => {
    injector = getTestBed();
    // tslint:disable-next-line: deprecation
    service = TestBed.get(ComputerService);
    // tslint:disable-next-line: deprecation
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#all', () => {
    it('should get all items', (done) => {
      service.all().subscribe(computers => {
        expect(computers).toEqual(testArray);
        done();
      });
      const req = httpMock.expectOne(mockServiceEndpoint);
      expect(req.request.method).toBe('GET');
      req.flush(testArray);
      httpMock.verify();
    });
  });

  describe('#create', () => {
    it('should create a computer', (done) => {
      service.create(testObject).subscribe(computer => {
        expect(computer).toEqual(testObject);
        done();
      });
      const req = httpMock.expectOne(mockServiceEndpoint);
      expect(req.request.method).toBe('POST');
      req.flush(testObject);
      httpMock.verify();
    });
  });

  describe('#delete', () => {
    it('should delete a computer', (done) => {
      service.delete(testObject).subscribe(computer => {
        expect(computer).toEqual(testObject);
        done();
      });
      const req = httpMock.expectOne(`${mockServiceEndpoint}/21`);
      expect(req.request.method).toBe('DELETE');
      req.flush(testObject);
      httpMock.verify();
    });
  });

  describe('#update', () => {
    it('should update a computer', (done) => {
      service.update(testObjectUpdated).subscribe(computer => {
        expect(computer).toEqual(testObjectUpdated);
        done();
      });
      const req = httpMock.expectOne(`${mockServiceEndpoint}/21`);
      expect(req.request.method).toBe('PATCH');
      req.flush(testObjectUpdated);
      httpMock.verify();
    });
  });

  describe('#getUrl', () => {
    it('should get Url', () => {
      expect(service.getUrl()).toEqual(mockServiceEndpoint);
    });
  });

  describe('#getUrlForId', () => {
    it('should get a shoe by id', () => {
      expect(service.getUrlForId(1)).toEqual(mockServiceEndpointId);
    });
  });
});
