import { TestBed } from '@angular/core/testing';

import { WorldcupService } from './worldcup.service';

describe('WorldcupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldcupService = TestBed.get(WorldcupService);
    expect(service).toBeTruthy();
  });
});
