import { TestBed } from '@angular/core/testing';

import { EnVarService } from './en-var.service';

describe('EnVarService', () => {
  let service: EnVarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnVarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
