import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwichComponent } from './ng-swich.component';

describe('NgSwichComponent', () => {
  let component: NgSwichComponent;
  let fixture: ComponentFixture<NgSwichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
