import { TestBed, inject } from '@angular/core/testing';

import { MarhabaService } from './marhaba.service';

describe('MarhabaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarhabaService]
    });
  });

  it('should be created', inject([MarhabaService], (service: MarhabaService) => {
    expect(service).toBeTruthy();
  }));
});
