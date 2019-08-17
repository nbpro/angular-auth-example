import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThColComponent } from './th-col.component';

describe('ThColComponent', () => {
  let component: ThColComponent;
  let fixture: ComponentFixture<ThColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
