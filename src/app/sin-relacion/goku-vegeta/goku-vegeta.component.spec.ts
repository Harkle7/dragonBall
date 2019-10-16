import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GokuVegetaComponent } from './goku-vegeta.component';

describe('GokuVegetaComponent', () => {
  let component: GokuVegetaComponent;
  let fixture: ComponentFixture<GokuVegetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GokuVegetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GokuVegetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
