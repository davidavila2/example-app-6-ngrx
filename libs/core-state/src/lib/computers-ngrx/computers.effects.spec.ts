import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { ComputersEffect } from './computers.effects';
import { ComputerService, CoreDataModule, NotifyService, Computer } from '@dashboard/core-data';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataPersistence } from '@nrwl/angular';

const testObject: Computer = {
  "approved": false,
  "coolLevel": 0,
  "details": "This is a test of details",
  "id": 21,
  "title": "This is a test"
};

const mockComputer = <any>[{ id: 1 }];

describe('ComputerEffects', () => {
  let actions$: Observable<any>;
  let effects: ComputersEffect;
  let dataPersistence: DataPersistence<any>;
  let computerService: ComputerService;
  let notify: NotifyService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        
      ]
    })
  })
})