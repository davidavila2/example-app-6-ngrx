import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputersListComponent } from './computers-list.component';
import { By } from '@angular/platform-browser';
import { Computer } from '@dashboard/core-data';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@dashboard/material';

describe('ComputersListComponent', () => {
  let component: ComputersListComponent;
  let fixture: ComponentFixture<ComputersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        RouterModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      declarations: [ ComputersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputersListComponent);
    component = fixture.componentInstance;

    const computerDe = fixture.debugElement.query(By.css('computer'));
    const computerEl = computerDe;
    const testObject: Computer = {
      "approved": false,
      "coolLevel": 0,
      "details": "This is a test of details",
      "id": 21,
      "title": "This is a test"
    }
    // let component.computers = testObject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('@computers', () => {
    it('should display testObject in the template', () => {
      const expectedComputer = this.testObject;
      // expect(computerEl.textContext).toContain(expectedComputer)
    });
  })
});
