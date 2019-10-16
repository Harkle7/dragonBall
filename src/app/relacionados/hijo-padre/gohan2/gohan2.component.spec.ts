import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gohan2Component } from './gohan2.component';

describe('Gohan2Component', () => {
  let component: Gohan2Component;
  let fixture: ComponentFixture<Gohan2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gohan2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gohan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
