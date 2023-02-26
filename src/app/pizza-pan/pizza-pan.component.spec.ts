import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPanComponent } from './pizza-pan.component';

describe('PizzaPanComponent', () => {
  let component: PizzaPanComponent;
  let fixture: ComponentFixture<PizzaPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
