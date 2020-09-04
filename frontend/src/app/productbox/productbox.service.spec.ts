import { TestBed } from '@angular/core/testing';

import { ProductboxService } from './productbox.service';

describe('ProductboxService', () => {
  let service: ProductboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
