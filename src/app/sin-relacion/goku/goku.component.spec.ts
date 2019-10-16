import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GokuComponent } from './goku.component';

describe('GokuComponent', () => {
  let component: GokuComponent;
  let fixture: ComponentFixture<GokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
