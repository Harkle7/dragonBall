import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gohan1Component } from './gohan1.component';

describe('Gohan1Component', () => {
  let component: Gohan1Component;
  let fixture: ComponentFixture<Gohan1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gohan1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gohan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
