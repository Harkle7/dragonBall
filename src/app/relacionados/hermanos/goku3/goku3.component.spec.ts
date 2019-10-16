import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goku3Component } from './goku3.component';

describe('Goku3Component', () => {
  let component: Goku3Component;
  let fixture: ComponentFixture<Goku3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goku3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goku3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
