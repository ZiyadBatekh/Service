import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLaVeComponent } from './c-la-ve.component';

describe('CLaVeComponent', () => {
  let component: CLaVeComponent;
  let fixture: ComponentFixture<CLaVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLaVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLaVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
