import { TestBed } from '@angular/core/testing';

import { FormatMoneyService } from './format-money.service';

describe('FormatMoneyService', () => {
  let service: FormatMoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatMoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
