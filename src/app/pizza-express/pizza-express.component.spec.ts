import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaExpressComponent } from './pizza-express.component';

describe('PizzaExpressComponent', () => {
  let component: PizzaExpressComponent;
  let fixture: ComponentFixture<PizzaExpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaExpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
