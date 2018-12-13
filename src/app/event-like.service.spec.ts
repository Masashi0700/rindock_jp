import { TestBed } from '@angular/core/testing';

import { EventLikeService } from './event-like.service';

describe('EventLikeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventLikeService = TestBed.get(EventLikeService);
    expect(service).toBeTruthy();
  });
});
