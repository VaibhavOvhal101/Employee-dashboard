import { TestBed } from '@angular/core/testing';

import { EmpTableService } from './emp-table.service';

describe('EmpTableService', () => {
  let service: EmpTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
