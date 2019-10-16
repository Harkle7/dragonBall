import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goku1Component } from './goku1.component';

describe('Goku1Component', () => {
  let component: Goku1Component;
  let fixture: ComponentFixture<Goku1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goku1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goku1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
