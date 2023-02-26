import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickersComponent } from './chickers.component';

describe('ChickersComponent', () => {
  let component: ChickersComponent;
  let fixture: ComponentFixture<ChickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
