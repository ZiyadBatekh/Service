import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoveComponent } from './rove.component';

describe('RoveComponent', () => {
  let component: RoveComponent;
  let fixture: ComponentFixture<RoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
