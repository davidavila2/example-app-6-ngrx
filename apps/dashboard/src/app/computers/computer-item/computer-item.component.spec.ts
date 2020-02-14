import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerItemComponent } from './computer-item.component';

describe('ComputerItemComponent', () => {
  let component: ComputerItemComponent;
  let fixture: ComponentFixture<ComputerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
