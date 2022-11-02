import { TestBed } from '@angular/core/testing';

import { ResolvGuard } from './resolv.guard';

describe('ResolvGuard', () => {
  let guard: ResolvGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResolvGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
