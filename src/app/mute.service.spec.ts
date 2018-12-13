import { TestBed } from '@angular/core/testing';

import { MuteService } from './mute.service';

describe('MuteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuteService = TestBed.get(MuteService);
    expect(service).toBeTruthy();
  });
});
