import { TestBed } from '@angular/core/testing';

import { EmployeesvcService } from './employeesvc.service';

describe('EmployeesvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeesvcService = TestBed.get(EmployeesvcService);
    expect(service).toBeTruthy();
  });
});
