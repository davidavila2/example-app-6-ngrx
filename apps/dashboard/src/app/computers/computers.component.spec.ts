import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputersComponent } from './computers.component';
import { ComputersFacade, defaultState } from '@dashboard/core-state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '@dashboard/material';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComputersDetailsComponent } from './computers-details/computers-details.component';
import { ComputersListComponent } from './computers-list/computers-list.component';
import { Store } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Computer } from '@dashboard/core-data';

describe('ComputersComponent', () => {
  let component: ComputersComponent;
  let fixture: ComponentFixture<ComputersComponent>;
  let computersFacade: ComputersFacade;
  let store: MockStore<any>;
  const formBuilder: FormBuilder = new FormBuilder();
  const testObject: Computer = {
    "approved": false,
    "coolLevel": 0,
    "details": "This is a test of details",
    "id": 21,
    "title": "This is a test"
  }
  const testForm = {
    id: null,
    title: '',
    details: '',
    coolLevel: '',
    approved: ''
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        RouterModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      declarations: [
        ComputersComponent
      ],
      providers: [
        provideMockStore(),
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // tslint:disable-next-line: deprecation
    store = TestBed.get(Store);
    store.setState(defaultState);
    fixture = TestBed.createComponent(ComputersComponent);
    component = fixture.componentInstance;
    // tslint:disable-next-line: deprecation
    computersFacade = TestBed.get(ComputersFacade);
    component.form = formBuilder.group({
      id: null,
      title: '',
      details: '',
      coolLevel: '',
      approved: ''
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#resetComputer', () => {
    it('should reset form', () => {
      component.form.patchValue({ id: 5 });
      component.resetComputer();
      expect(component.form.value.id).toEqual(null);
    });
  });

  describe('#selectComputer', () => {
    it('should patch form and set selected computer', () => {
      component.selectComputer(testObject);
      expect(component.selectedComputer).toEqual(testObject);
      expect(component.form.value).toEqual(testObject);
    });
  });

  describe('#deleteComputer', () => {
    it('should delete a computer', () => {
      jest.spyOn(computersFacade, 'deleteComputer');
      component.deleteComputer(testObject);
      expect(computersFacade.deleteComputer).toHaveBeenCalledWith(testObject);
    });
  });

  describe('#createComputer', () => {
    it('should create a computer', () => {
      jest.spyOn(computersFacade, 'createComputer');
      component.form.patchValue(testObject);
      component.createComputer();
      expect(computersFacade.createComputer).toHaveBeenCalledWith(testObject);
    })
  })

  describe('#update', () => {
    it('should create a computer', () => {
      jest.spyOn(computersFacade, 'updateComputer');
      component.form.patchValue(testObject);
      component.updateComputer();
      expect(computersFacade.updateComputer).toHaveBeenCalledWith(testObject);
    });
  });

  describe('#ngOnInit', () => {
    it('it should load computers on init', () => {
      component.ngOnInit();
      fixture.detectChanges();
      jest.spyOn(computersFacade, 'loadComputers');
      expect(computersFacade.loadComputers).toBeTruthy();
    });

    // it('something', () => {
    //   jest.spyOn(component.form, 'initForm');
    //   expect(component.form.value).toHaveBeenCalledWith(testForm);
    // })

    it('should reset form on mutations', () => {
      jest.spyOn(component, 'resetComputer');
      component.form.patchValue(testObject);
      component.createComputer();
      component.resetComputer();
      expect(component.resetComputer).toHaveBeenCalled();
    });
  });
});