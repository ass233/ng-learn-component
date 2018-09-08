import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontResizeComponent } from './font-resize.component';

describe('FontResizeComponent', () => {
  let component: FontResizeComponent;
  let fixture: ComponentFixture<FontResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
