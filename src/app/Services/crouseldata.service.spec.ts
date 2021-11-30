import { TestBed } from '@angular/core/testing';

import { CrouseldataService } from './crouseldata.service';

describe('CrouseldataService', () => {
  let service: CrouseldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrouseldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
