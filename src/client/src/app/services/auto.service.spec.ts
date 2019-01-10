import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AutoService } from './auto.service';

function checkFilter(filter: any) {
  // filter: [{
  //  "id": 1,
  //  "visibility": true,
  //  "name": "Hersteller",
  //  "type": 1,
  //  "data": [{ "id": 5, "value": "Audi" }, ... ],
  //  "weight": 10
  // },
  // ...
  // ]
  expect(filter).toBeTruthy();
  expect(filter.length).toBeGreaterThan(0);
  expect(filter[0].id).toBeGreaterThan(0);
  expect(filter[0].visibility).toBeDefined();
  expect(filter[0].name).toBeDefined();
  expect(filter[0].type).toBeGreaterThan(0);
  expect(filter[0].data).toBeTruthy();
  expect(filter[0].weight).toBeGreaterThan(0);
}

describe('AutoService', () => {
  // classundertest/service object
  let service: AutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AutoService]
    });
    service = TestBed.get(AutoService);
  });

  /**
   * Create auto service object.
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Get all Filter.
   */
  it('should get all Filter', (done) => {
    service.getFilter().subscribe((filter: any) => {
      checkFilter(filter);
      done();
    });
  });

  /**
   * Get only main filters for main page.
   */
  it('should get main filter', (done) => {
    service.getMainFilter().subscribe((filter: any) => {
      checkFilter(filter);
      done();
    });
  });

  /**
   * Get all ecars.
   */
  it('should get all ecars', (done) => {
    service.getFilterAutos({}).subscribe((autos: any) => {
      expect(autos).toBeTruthy();
      done();
    });
  });

  /**
   * Get filtered ecars.
   */
  it('should get filtered ecars', (done) => {
    service.getFilterAutos({
      1: 1,                          // "1"  <-  manufacturer (filter)
      3: { min: 60000, max: 80000 }  // "3"  <-  price (filter)
    }).subscribe((autos: any) => {
      expect(autos).toBeTruthy();
      done();
    });
  });

  /**
   * Get best rated ecars.
   */
  it('should get best rated ecars', (done) => {
    const limit = 4;
    service.getBestAutos(limit).subscribe((autos: any) => {
      expect(autos).toBeTruthy();
      expect(autos).toBeLessThanOrEqual(limit);
      done();
    });
  });
});
