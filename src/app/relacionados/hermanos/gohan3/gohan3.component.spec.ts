import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gohan3Component } from './gohan3.component';

describe('Gohan3Component', () => {
  let component: Gohan3Component;
  let fixture: ComponentFixture<Gohan3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gohan3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gohan3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
