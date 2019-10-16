import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goten3Component } from './goten3.component';

describe('Goten3Component', () => {
  let component: Goten3Component;
  let fixture: ComponentFixture<Goten3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goten3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goten3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
