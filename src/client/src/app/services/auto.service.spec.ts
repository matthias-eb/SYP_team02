import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AutoService } from './auto.service';

describe('AutoService', () => {
  // classundertest/service object
  let service: AutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AutoService]
    });
  });

  /**
   * Create auto service object.
   */
  it('should be created', () => {
    service = TestBed.get(AutoService);
    expect(service).toBeTruthy();
  });
});
