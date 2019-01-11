import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RatingService } from './rating.service';

describe('RatingService', () => {

  // classundertest/service object
  let service: RatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RatingService]
    });
  });

  /**
   * Create authentification service object.
   */
  it('should be created', () => {
    service = TestBed.get(RatingService);
    expect(service).toBeTruthy();
  });
});
