import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerItemComponent } from './computer-item.component';
import { MaterialModule } from '@dashboard/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { RoutingModule } from '../../routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ComputerItemComponent', () => {
  let component: ComputerItemComponent;
  let fixture: ComponentFixture<ComputerItemComponent>;
  let mockRouter = {
    navigate: jest.fn()
  } 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComputerItemComponent],
      imports: [
  MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        {
          provide: ActivatedRoute,
          useValue: mockRouter
        },
      ]
    })
      .overrideTemplate(ComputerItemComponent, '')
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
