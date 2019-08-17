import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThRowComponent } from './th-row.component';

describe('ThRowComponent', () => {
  let component: ThRowComponent;
  let fixture: ComponentFixture<ThRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
