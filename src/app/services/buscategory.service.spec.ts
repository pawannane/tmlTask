import { TestBed } from '@angular/core/testing';

import { BuscategoryService } from './buscategory.service';

describe('BuscategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscategoryService = TestBed.get(BuscategoryService);
    expect(service).toBeTruthy();
  });
});
