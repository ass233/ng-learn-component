import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueBindingComponent } from './value-binding.component';

describe('ValueBindingComponent', () => {
  let component: ValueBindingComponent;
  let fixture: ComponentFixture<ValueBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
