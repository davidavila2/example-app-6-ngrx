import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputersDetailsComponent } from './computers-details.component';

describe('ComputersDetailsComponent', () => {
  let component: ComputersDetailsComponent;
  let fixture: ComponentFixture<ComputersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
