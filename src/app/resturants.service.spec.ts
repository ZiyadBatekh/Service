import { TestBed, inject } from '@angular/core/testing';

import { ResturantsService } from './resturants.service';

describe('ResturantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResturantsService]
    });
  });

  it('should be created', inject([ResturantsService], (service: ResturantsService) => {
    expect(service).toBeTruthy();
  }));
});
