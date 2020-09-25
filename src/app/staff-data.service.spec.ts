import { TestBed } from '@angular/core/testing';

import { StaffDataService } from './staff-data.service';

describe('StaffDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffDataService = TestBed.get(StaffDataService);
    expect(service).toBeTruthy();
  });
});
