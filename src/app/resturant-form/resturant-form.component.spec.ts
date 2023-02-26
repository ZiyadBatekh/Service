import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantFormComponent } from './resturant-form.component';

describe('ResturantFormComponent', () => {
  let component: ResturantFormComponent;
  let fixture: ComponentFixture<ResturantFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
