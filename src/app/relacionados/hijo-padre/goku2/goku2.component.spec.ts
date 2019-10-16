import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goku2Component } from './goku2.component';

describe('Goku2Component', () => {
  let component: Goku2Component;
  let fixture: ComponentFixture<Goku2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goku2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goku2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
