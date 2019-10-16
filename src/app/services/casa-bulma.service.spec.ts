import { TestBed } from '@angular/core/testing';

import { CasaBulmaService } from './casa-bulma.service';

describe('CasaBulmaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasaBulmaService = TestBed.get(CasaBulmaService);
    expect(service).toBeTruthy();
  });
});
