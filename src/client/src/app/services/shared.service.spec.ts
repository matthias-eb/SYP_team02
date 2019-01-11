import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {

  // classundertest/service object
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SharedService]
    });
  });

  /**
   * Create authentification service object.
   */
  it('should be created', () => {
    service = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });
});
