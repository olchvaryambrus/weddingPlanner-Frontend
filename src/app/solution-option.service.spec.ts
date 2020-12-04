import { TestBed } from '@angular/core/testing';

import { SolutionOptionService } from './solution-option.service';

describe('SolutionOptionService', () => {
  let service: SolutionOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolutionOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
