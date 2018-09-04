import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateInterporationComponent } from './template-interporation.component';

describe('TemplateInterporationComponent', () => {
  let component: TemplateInterporationComponent;
  let fixture: ComponentFixture<TemplateInterporationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateInterporationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateInterporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
